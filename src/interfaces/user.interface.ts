import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';

// export type UserDocument = User & Document;
 
@Schema()
export class User extends Document{
  @Prop()
  @ApiProperty({
    description: '用户手机',
    example: '13111111111'
  })
  readonly phone: string
  @Prop()
  @ApiProperty({
    description: '用户密码',
    example: 'admin'
  })
  readonly password: string
}

// export const users = SchemaFactory.createForClass(User)