import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('用户模块')
export class UserController {
  constructor(private UserService: UserService){
    
  }
  @Post('regist')
  @ApiOperation({
    summary: '用户进行注册'
  })
  async registUser(@Body() userDto: User){
    return await this.UserService.regist(userDto)
  }
}
