import 'express-async-errors';
import { Request, Response, NextFunction } from 'express';
import { Email } from '../../../../services/Email';
import { ApiError } from '../../apis/Error';


// 24:55
// const Error = (error: Error, request: Request, response: Response, next: NextFunction ) => {
const Error = (
    error: Error & ApiError
    , request: Request
    , response: Response
    , next: NextFunction ) => {

    // console.log( `passou no Error :: Error :: ${error.message} ` );
    console.log( `Error :: ${error} ` );

    // Enviar email
    const envio = error.enviaEmail ? Email( error.message ) : '';
    

    return( 
        response
        .status( error.statusCode )
        .json( {
            // 25:11
            // status: "ProviderError"
            status: error.statusCode
            , message: error.message
            , enviaEmail: error.enviaEmail
        })
    );

};

export { Error };
