import bcrypt from 'bcrypt';

import { client } from '../../../../../prisma/client';
import { IUserRequest } from '../../../interfaces/User/IUserRequest';
import {Providers} from '../../../../infra/providers'

/*    
class CreateUserUseCase {
    
    async execute( { name
        , userName
        , email
        , whatsapp
        , password
        , birth
    } : IUserRequest ) {
        */
       
const CreateUserUseCase = async ( { name
                                    , username
                                    , email
                                    , whatsapp
                                    , password
                                    , birth
                                    , secret
                                } : IUserRequest ) => {    

    // *** VALIDAÇÃO DE BD ***

    // console.log( `:: Cr?eateUserUseCase :: Verificar se username existe = ${ username }`);

    const userAlreadyExists = await client.user.findFirst( { where: { username } } );
            
    if( userAlreadyExists ) {
        // throw new Error( 'Usuário já existe!' );
        //console.error( 'Usuario já existe ') ;
        return( false );
    } 


    // TODO - Criar funcão helper para criptografar senhas
    // Criptografar a senha usando bcryptjs
    // const passwordHash = await hash( password, 8 );
    // *** Eu prefiro usar o bcrypt ***
    // Criptografar a senha usando bcrypt
    const salt = await bcrypt.genSalt( 12 );
    const passwordHash = await bcrypt.hash( password, salt );

    // Cadastrar o usuario

    // const myBrith = new Date( birth );
    // console.log( myBrith );
    //  birth: new Date( "2023-01-01T00:00:00" )
    
    // funfou
    // const myBrith = new Date;

    // Teste
    const myBrith = new Date( birth );
    
    // console.log( myBrith );

    // secret = Providers.generateSecret();
    secret = Providers.Secret.generateSecret();

    try{

        // console.log( `:: CreateUserUseCase :: try `);

        const createdUser = await client.user.create( {
            data: {
                name
                , username
                , email
                , whatsapp
                , password: passwordHash
                // , birth: new Date()
                , birth: myBrith
                , secret
            }
        } )        
        .then();        
        
        // console.log( `:: CreateUserUseCase :: createdUser2 = ${ createdUser }`);
        
        /*
        .then( () => {
            console.log( 'cadastrou!')
        });
    
        const [ano, mes, dia, hora, minuto, segundo, milissegundo] = [2022,2,21,9,58,0,35]
        const data1 = new Date(ano,mes,dia,hora,minuto,segundo,milissegundo)
        const data2 = new Date(ano,mes,dia,hora,minuto,segundo,milissegundo)
    
        console.log(+data1)
        console.log(+data1 == +data2)   
        // console.log(+myBrith);   
        */
    
        return( createdUser );
    
    } catch( error ) {

        console.log( error );

        return( false );
    }
}

export { CreateUserUseCase };