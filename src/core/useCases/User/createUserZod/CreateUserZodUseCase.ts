import bcrypt from 'bcrypt';

import { client } from '../../../../../prisma/client';
import {TypeUserZodSchema} from '../../../models/user/UserZodSchema';
import { Providers } from '../../../../infra/providers';
import { ApiError } from '../../../../infra/providers/apis/Error';
import { StatusCodes } from 'http-status-codes';

const CreateUserZodUseCase = async ( dtoUserZod: TypeUserZodSchema ) => {

    // Validação de BD
    const userAlreadyExists = await client.user.findFirst( {where: { username : dtoUserZod.username }});

    /*
    if (userAlreadyExists) {
        const errorMessage = "Usuário já existe\nTestando throw";
        throw new Error(errorMessage);
    } 
    */

   if( userAlreadyExists ){
       // return( false );
       // process.exit();
    //    throw new Error(`Usuário já existe\nTestando throw`);
       throw new ApiError( `ApiError :: Usuário já existe`, StatusCodes.BAD_REQUEST, 0 );

   };


    const salt = await bcrypt.genSalt( 12 );
    const passwordHash = await bcrypt.hash( dtoUserZod.password, salt );

    // dtoUserZod.secret = Providers.generateSecret();
    dtoUserZod.secret = Providers.Secret.generateSecret()

    try{

        const myBrith = new Date( dtoUserZod.birth );
    

        const createdUser = await client.user.create( {
            data: {
                name: dtoUserZod.name
                , username: dtoUserZod.username
                , email: dtoUserZod.email
                , whatsapp: dtoUserZod.whatsapp
                , password: passwordHash
                , birth: myBrith
                , secret: dtoUserZod.secret
            }
        })
        .then();

        return( createdUser );

    } catch( error ) {
        console.log( error );

        return( false );
    };
};

export {CreateUserZodUseCase};