import { User } from "src/modules/user/entities/User";
import { User as UserRaw } from "@prisma/client";


export class PrismaUserMapper {
    static toPrisma({name, email, password, id, createdAt}: User): UserRaw {
        return {
            id,
            name,
            email,
            password,
            createdAt
        }
    }


    static toDomain({name, email, password, id, createdAt}: UserRaw): User {
        return new User({
            name,
            email,
            password,
            createdAt
        },
    id,
    );
    }
}