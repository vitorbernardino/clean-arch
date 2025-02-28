import { JwtService } from "@nestjs/jwt";
import { SignInUseCase } from "./signInUseCase";
import { makeUser } from "src/modules/user/factories/userFactory";
import { UserPayload } from "../../models/UserPayload";



let signInUseCase: SignInUseCase;
let jwtService: JwtService;

describe('sign in', () => {
    beforeEach(() => {
        jwtService = new JwtService({secret:'secret'});
        signInUseCase = new SignInUseCase(jwtService);
    });

    it('should be able to create a valid access token', async () => {
        const user = makeUser({});

        const token = await signInUseCase.execute({user});

        const payload = jwtService.decode(token) as UserPayload;

        expect(payload.sub).toEqual(user.id);
    });














})