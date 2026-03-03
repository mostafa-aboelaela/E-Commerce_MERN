interface RegisterParams {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
export declare const register: ({ firstName, lastName, email, password }: RegisterParams) => Promise<{
    data: string;
    statusCode: number;
} | {
    data: import("mongoose").Document<unknown, {}, import("../models/userModel.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../models/userModel.js").IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    };
    statusCode: number;
}>;
interface LoginParams {
    email: string;
    password: string;
}
export declare const login: ({ email, password }: LoginParams) => Promise<{
    data: string;
    statusCode: number;
} | {
    data: import("mongoose").Document<unknown, {}, import("../models/userModel.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../models/userModel.js").IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    };
    statusCode: number;
}>;
export {};
//# sourceMappingURL=userService.d.ts.map