import { client } from '../../../../../prisma/client';
import {TypeUserZodSchema, UserZodSchema } from '../../../models/user/UserZodSchema';

const UpdateUserUseCase = async ( id: string, dtoUserZodSchema: TypeUserZodSchema ) => {

    // Validar 

    const userFinded = await client.user.findFirst( { where: {id} });

    if( !userFinded ){
        throw new Error( 'Usuário não existe ')
    } 
    
    const userUpdated = await client.user.update({
        where: {id}
        , data: dtoUserZodSchema 
    } ); 


    return( userUpdated );

};

export { UpdateUserUseCase };

