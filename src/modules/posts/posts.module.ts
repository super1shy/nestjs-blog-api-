import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { postProviders } from './posts.providers';

@Module({
  providers: [PostsService, ...postProviders],
  controllers: [PostsController],
})
export class PostsModule {}
