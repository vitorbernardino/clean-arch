import { Module } from '@nestjs/common';
import { UsersController } from './infra/http/modules/user/users.controller';
import { UserModule } from './infra/http/modules/user/user.module';
import { DatabaseModule } from './infra/database/database.module';
import { AuthModule } from './infra/http/modules/auth/auth.module';

@Module({
  imports: [UserModule, DatabaseModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
