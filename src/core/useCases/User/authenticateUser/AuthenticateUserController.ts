import {Request, Response, RequestHandler} from 'express';
import { StatusCodes } from 'http-status-codes';

// import { IUserAuthenticate} from '../../../interfaces/User/IUserAuthenticate';
// import * as yup from 'yup';
// import UsrAuthenticateYupSchema from '../../../models/user/UserAuthenticateYupSchema';

// import {ZodArray, ZodError, ZodErrorMap, z} from 'zod';
import { TypeUserAuthenticationZodSchema, UserAuthenticationZodSchema } from '../../../models/user/UserAuthenticateZodSchema';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';
import { ZodError } from 'zod';
// import { ValidationError } from 'yup';

// import z from '../../../helpers/zodErrors';
// import { returnZodLi from '../../../helpers/zodErrors/returnZodListErrors';
import { zodErrors } from '../../../helpers/zodErrors';
// import * as helpers from '../../../helpers';


// const AuthenticateUserController : RequestHandler = async ( request: Request, response: Response) => {
// const AuthenticateUserController = async ( request: Request< {}, {}, {}, TypeUserAuthenticationZodSchema >, response: Response) => {
const AuthenticateUserController : RequestHandler = async ( request: Request< {}, {}, TypeUserAuthenticationZodSchema >, response: Response) => {

    // const dtoUserAuthenticate : TypeUserAuthenticationZodSchema = request.body;
    const dtoUserAuthenticate : TypeUserAuthenticationZodSchema = request.body as TypeUserAuthenticationZodSchema;
   
    // Validar estrutura dos dados recebidos
    try {

        // await UsrAuthenticateYupSchema.validate( dtoUserAuthenticate );  
        UserAuthenticationZodSchema.parse( dtoUserAuthenticate );      

    } catch( error ) {

        const errors = error as ZodError;
        const listError = zodErrors.returnZodListErrors( errors );

        return(
            response
            .status( StatusCodes.BAD_REQUEST)        
            .send  ( listError )
        );
    };

    const userAuthenticatedToken = await AuthenticateUserUseCase( dtoUserAuthenticate );

    return(
        response
        .status( StatusCodes.OK)
        .send  (userAuthenticatedToken ) 
    );

};


export { AuthenticateUserController };
