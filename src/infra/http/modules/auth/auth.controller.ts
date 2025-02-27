import { Controller, HttpCode, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthRequestModel } from "./models/authRequestModel";


@Controller()
export class AuthController{

    @Post('signIn')
    @HttpCode(200)
    @UseGuards(AuthGuard('local'))
    async signIn(@Request() request: AuthRequestModel){
        return request.user;
    }
}