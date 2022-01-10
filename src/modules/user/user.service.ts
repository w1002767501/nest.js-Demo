import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { User } from 'src/interfaces/user.interface'

@Injectable()
export class UserService {
  constructor(
    @InjectModel('USER_MODEL') private readonly userModel: Model<User>
  ){}
  // 注册方法
  public async regist(User: User){
    return this.userModel.find(
      {
        phone: User.phone
      }
    ).then(res=>{
      if( res.length!==0 ){
        console.log('该用户已经注册');
        throw Error()
      }
    })
    .then(()=>{
      try{
        const createUser = new this.userModel(User)
        return createUser.save()
      } catch(error){
        throw Error('保存用户失败'+error)
      }
    })
    .catch(err=>{
      console.warn(`发现问题${err}`);
      
    })
  }
}
