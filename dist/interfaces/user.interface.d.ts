import { Document } from 'mongoose';
export declare class User extends Document {
    readonly phone: string;
    readonly password: string;
}
