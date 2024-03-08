/*
    AV 20231228
    Retornar uma lista com os erros encontrados 
*/
import {z, ZodError} from 'zod';
import { StatusCodes  } from 'http-status-codes';


const returnZodListErrors = ( error: ZodError ) => {

    let nCount = 0;
    const zodListError: Record<string, string> = {};

    const zodErrors = error as ZodError;

    if( error instanceof ZodError ) {

        // console.log( 'Instanceof ZodError' );
        zodErrors.errors.forEach( zodErro => {

            if( !zodErro ) return;
            
            zodListError[ ++nCount ] = `${zodErro.path} :: ${zodErro.message }`;

        } );

    } else {
        
        throw new Error( `Não é zod! ` );

    };

    const responseError = {
        status: StatusCodes.BAD_REQUEST
        , message: `Erros de validação encontrados: ${nCount}`
        , errors: zodListError
    }

    return( responseError );    

};

export {returnZodListErrors};