import { Request, Response, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import {TypeUserZodSchema, UserZodSchema } from '../../../models/user/UserZodSchema';

import { IMyResponse } from '../../../interfaces/myResponse/IMyResponse';
import { UpdateUserUseCase } from './UpdateUserUseCase';

import { zodErrors } from '../../../helpers/zodErrors';
import { ZodError } from 'zod';
import {Providers} from '../../../../infra/providers'



const UpdateUserController: RequestHandler = async (request: Request, response: Response ) => {

    console.log( `:: UpdateUserController ::`)

    const id: string = request.params.id;
    const dtoUserZodSchema: TypeUserZodSchema = request.body as TypeUserZodSchema;

    // Validar estrutura de dados
    if( !id ){

        throw new Error( 'Id inválido ');
    }

    if( !dtoUserZodSchema.secret ){

        dtoUserZodSchema.secret = Providers.Secret.generateSecret();        
    }

    try{

        dtoUserZodSchema.birth = new Date().toISOString()

        UserZodSchema.parse( dtoUserZodSchema );

    } catch( error ) {

        const errors = error as ZodError;
        const listError = zodErrors.returnZodListErrors( errors );

        return( 
            response
            .status( StatusCodes.BAD_REQUEST )
            .send  ( listError )
        )
    };

    let myResponse: IMyResponse;

    const userUpdated = await UpdateUserUseCase( id, dtoUserZodSchema )


    myResponse = {
        status: (userUpdated ? StatusCodes.OK : StatusCodes.BAD_REQUEST )
        , message: 'Usuário ' + ( userUpdated ? 'encontrado' : 'inválido' )
        , value: id        
        // ,  ... userUpdated
    };

    return(
        response
        .status( myResponse.status )
        .json  ( myResponse )
    )

};

export { UpdateUserController };
