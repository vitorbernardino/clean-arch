import { Controller, Get, HttpCode, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthRequestModel } from "./models/authRequestModel";
import { SignInUseCase } from "src/modules/auth/useCases/signInUseCase/signInUseCase";
import { LocalAuthGuard } from "./guards/localAuth.guard";
import { JwtAuthGuard } from "./guards/jwtAuth.guard";
import { Public } from "./decorators/isPublic";
import { AuthenticatedRequestModel } from "./models/authenticatedRequestModel";


@Controller()
export class AuthController{
    constructor(private signInUseCase: SignInUseCase){}

    @Post('signIn')
    @Public()
    @HttpCode(200)
    @UseGuards(LocalAuthGuard)
    async signIn(@Request() request: AuthRequestModel){
       const access_token = await this.signInUseCase.execute({
        user: request.user,
       });

       return {access_token};
    }

    @Get('test')
    async test(@Request() request: AuthenticatedRequestModel){
        return request.user;
    }

}