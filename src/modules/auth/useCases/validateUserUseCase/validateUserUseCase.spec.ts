import { FakeUserRepository } from "src/modules/user/repositories/fakeUserRepository";
import { ValidateUserUseCase } from "./validateUserUseCase";
import { makeUser } from "src/modules/user/factories/userFactory";
import { hash } from "bcrypt";
import { UnauthorizedException } from "@nestjs/common";


let validateUserUseCase: ValidateUserUseCase;
let fakeUserRepository: FakeUserRepository;

describe('Validate user', () => {
    beforeEach(() => { 
        fakeUserRepository = new FakeUserRepository();
        validateUserUseCase = new ValidateUserUseCase(fakeUserRepository);
    });


    it('should be able to return user when credentials are correct', async () => {
        const userPassword = '123';

        const user = makeUser({
            password: await hash(userPassword, 10)
        })

        fakeUserRepository.save(user);

        const result = await validateUserUseCase.execute({
            email: user.email,
            password: userPassword
        })

        expect(result).toEqual(user);
    });

    
    it('should be able to throw error when credentials are incorrect', async () => {
        const userPassword = '123';

        const user = makeUser({
            password: await hash(userPassword, 10)
        })

        fakeUserRepository.save(user);

        expect(async () => {
            await validateUserUseCase.execute({
                email: user.email,
                password: 'wrongPassword'
            })
        }).rejects.toThrow(UnauthorizedException);
    });
})