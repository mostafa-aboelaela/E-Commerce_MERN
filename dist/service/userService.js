import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async ({ firstName, lastName, email, password }) => {
    const findUser = await userModel.findOne({ email });
    if (findUser) {
        return { data: "User already exists with this email", statusCode: 400 };
    }
    const handlePassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
        firstName,
        lastName,
        email,
        password: handlePassword
    });
    await newUser.save();
    return { data: generateJWT({ firstName, lastName, email }), statusCode: 200 };
};
export const login = async ({ email, password }) => {
    const findUser = await userModel.findOne({ email });
    if (!findUser) {
        return { data: "User already exists with this email", statusCode: 400 };
    }
    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if (passwordMatch) {
        return { data: generateJWT({ email, firstName: findUser.firstName, lastName: findUser.lastName }), statusCode: 200 };
    }
    return { data: "Invalid password", statusCode: 400 };
};
const generateJWT = (data) => {
    return jwt.sign(data, 'b6ab7514a99c2a6839cbfced');
};
//# sourceMappingURL=userService.js.map