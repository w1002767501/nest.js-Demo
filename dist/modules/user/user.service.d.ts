import { Model } from 'mongoose';
import { User } from 'src/interfaces/user.interface';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    regist(User: User): Promise<void | (User & {
        _id: any;
    })>;
}
