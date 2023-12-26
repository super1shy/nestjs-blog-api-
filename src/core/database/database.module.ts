import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

// We exported the database provider exports: [...databaseProviders] to make it accessible to the rest of the application that needs it.
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
