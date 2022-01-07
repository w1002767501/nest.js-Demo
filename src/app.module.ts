// 应用程序的根模块
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    PostsModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: '127.0.0.1',
    //   port: 3306,
    //   username: 'root',
    //   password: '123456789',
    //   database: 'cathome',
    //   entities: [],
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
