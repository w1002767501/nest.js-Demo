import { User } from 'src/interfaces/user.interface';
import { UserService } from './user.service';
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    registUser(userDto: User): Promise<void | (User & {
        _id: any;
    })>;
}
