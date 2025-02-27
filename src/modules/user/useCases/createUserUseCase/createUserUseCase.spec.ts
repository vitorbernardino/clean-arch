// import { compare } from "bcrypt";
// import { FakeUserRepository } from "../../repositories/fakeUserRepository";
// import { CreateUserUseCase } from "./createUserUseCase";


// let createUserUseCase: CreateUserUseCase;
// let fakeUserRepository: FakeUserRepository;

// describe('Create User Use Case', () => {
//   beforeEach(() => {
//     fakeUserRepository = new FakeUserRepository();
//     createUserUseCase = new CreateUserUseCase(fakeUserRepository);
//   });

//   //teste de criação de usuário
//   it('should be able to create a new user', async () => {
//     expect(fakeUserRepository.users).toEqual([]);

//     const user = await createUserUseCase.execute({
//       name: 'John Doe',
//       email: 'josé@email.com',
//       password:'',
//     });

//     // const user2 = await createUserUseCase.execute({
//     //   name: 'John Doe 2',
//     //   email: 'josé@email.com',
//     //   password:'',
//     // });

//     expect(fakeUserRepository.users).toEqual([user]);
//     });


//     //teste encriptação de senha
//     it('should be able to create a new user with encrypted password', async () => {
//       const userPassword = '123';
//       const user = await createUserUseCase.execute({
//         name: 'John Doe',
//         email: 'josé@email.com',
//         password: userPassword,
//       });

//       const comparePassword = await compare(userPassword, user.password);

//       expect(comparePassword).toBeTruthy();

//       });
  

// });
