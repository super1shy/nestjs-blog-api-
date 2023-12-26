import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    // Setting the ConfigModule.forRoot({ isGlobal: true }) to isGlobal: true will make the .env properties available throughout the application
    ConfigModule.forRoot({ isGlobal: true }),
    // import the database module into our app root module to make it available to all our services.
    DatabaseModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
