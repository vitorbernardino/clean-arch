import { randomUUID } from "node:crypto";
import { Replace } from "src/utils/replace";

interface UserProps{
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

export class User{
    private props: UserProps;
    private _id: string;

    constructor(props: Replace<UserProps, {createdAt?: Date}>, id?: string){
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date(),
        };
        this._id = id || randomUUID();
    }

    get id(){
        return this._id;
    }

    get name(){
        return this.props.name;
    }

    set name(value: string){
        this.props.name = value;
    }

    get email(){
        return this.props.email;
    }

    set email(value: string){
        this.props.email = value;   
    }

    get password(){
        return this.props.password;
    }

    set password(value: string){
        this.props.password = value;
    }
    
    get createdAt(){
        return this.props.createdAt;
    }

    set createdAt(value: Date){
        this.props.createdAt = value;
    }

}