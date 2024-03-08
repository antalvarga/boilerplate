import { Request, Response, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import {TypeUserZodSchema, UserZodSchema} from '../../../models/user/UserZodSchema';
import {IMyResponse, IMyResponseData} from '../../../interfaces/myResponse/IMyResponse';
import { CreateUserZodUseCase } from './CreateUserZodUseCase';

import {zodErrors} from '../../../helpers/zodErrors';
import { ZodError } from 'zod';
import { Providers } from '../../../../infra/providers';

const CreateUserZodController: RequestHandler = async (request: Request, response: Response) => {

    // console.log( 'CreateUserZodController' );
    // const {nome, email } = UserZodSchema.parse( request.body );
    const dtoUserZod: TypeUserZodSchema = request.body as TypeUserZodSchema;
    
    // throw new Error( 'Teste de erro');
    // Validar estrutura de dados
    try{

        UserZodSchema.parse( dtoUserZod );


    } catch( error ) {

        const errors = error as ZodError;
        const listError = zodErrors.returnZodListErrors( errors );

        return(
            response
            .status( StatusCodes.BAD_REQUEST )
            .send  ( listError )
        );
    };

    const userZodCreated = await CreateUserZodUseCase( dtoUserZod ).then();

    const myResponse: IMyResponseData = {
        status: ( userZodCreated ? StatusCodes.OK : StatusCodes.BAD_REQUEST )
        , message: 'Usuário ' + ( userZodCreated ? 'criado' : 'inválido '  )
        , value: ( userZodCreated ? userZodCreated.id : '' )
        // , ...userZodCreated
        , data: {
            ...userZodCreated
        }
    };

    return(
        response
        .status( myResponse.status )
        .send  ( myResponse )
    );
}

export {CreateUserZodController};


