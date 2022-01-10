// 应用程序的根模块
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { DbModule } from './db/db.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    PostsModule,
    DbModule,
    UserModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
