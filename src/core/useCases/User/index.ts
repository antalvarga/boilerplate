import * as createUser from './createUserYup/CreateUserController';
import * as createUserZod from './createUserZod/CreateUserZodController';
import * as authenticateUser from './authenticateUser/AuthenticateUserController';
import * as getUser from './getUser/GetUserController';
import * as removeUser from './removeUser/RemoveUserController';
import * as showUser from './showUser/ShowUserController';
import * as updateUser from './updateUser/UpdateUserController';
import * as importUser from './importUser/importUserTxtController';

// export const UserController = {
export const User = {
    ...createUser,
    ...createUserZod,
    ...authenticateUser,
    ...getUser,
    ...removeUser,
    ...showUser,
    ...updateUser,
    ...importUser
};
