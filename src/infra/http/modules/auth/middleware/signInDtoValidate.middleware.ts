import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { SignInDto } from "../dtos/SignInDto";
import { validate } from "class-validator";


export class SignInDtoValidateMiddleware implements NestMiddleware{
    async use(req: Request, res: Response, next: NextFunction) {
       const body = req.body;

       const signInBody = new SignInDto();
        signInBody.email = body.email;
        signInBody.password = body.password;

        const validations = await validate(signInBody);

        if(validations.length){
            throw new BadRequestException(validations);
        }

        next();
    }


}