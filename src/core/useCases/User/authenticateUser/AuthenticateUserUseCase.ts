import bcrypt, { compare } from 'bcrypt';
import { client } from '../../../../../prisma/client';
import { TypeUserAuthenticationZodSchema } from '../../../models/user/UserAuthenticateZodSchema';


import { Providers } from '../../../../infra/providers';


const AuthenticateUserUseCase = async ( { username
                                          , password
                                        } : TypeUserAuthenticationZodSchema ) => {

    // console.log( ' :: AuthenticateUserUseCase :: ');    

    // Verificar se usuário existe
    const userAlreadyExists = await client.user.findFirst( { where: {username} } );
    
    if( !userAlreadyExists ) {
        throw new Error( 'Usuário ou senha incorreta 1!' );
    };

    // console.log( userAlreadyExists );
    

    // Verificar se senha a está correta
    const passwordMatch = compare( password, userAlreadyExists.password );

    if( !passwordMatch ) {
        throw new Error( 'Usuário ou senha incorreta !' );
    };
    
    // Geração do secret somente no cadastramento do usuário
    // const secret = Providers.Secret.generateSecret();
    const secret = userAlreadyExists.secret;

    const token = await Providers.Token.GenerateToken( userAlreadyExists.id
                                                        , secret );

    const myMessage = {
        token,
        secret
    };

    // return( token );
    return( myMessage );

};

export {AuthenticateUserUseCase};