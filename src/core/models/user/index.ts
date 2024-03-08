// TODO - Estudar como usar o model no schema.prisma

import mongoose from 'mongoose';
import UserSchema from './UserSchema';


const Schema = new mongoose.Schema( UserSchema );
const UserModel = mongoose.model( "User", Schema );


export default UserModel;
