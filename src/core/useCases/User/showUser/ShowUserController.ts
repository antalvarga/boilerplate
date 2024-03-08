import { Request, Response, RequestHandler} from 'express';
import { StatusCodes } from 'http-status-codes';

import { IMyResponse, IMyResponseData } from '../../../interfaces/myResponse/IMyResponse';
import { ShowUserUseCase } from './ShowUserUseCase';

const ShowUserController: RequestHandler = async ( request: Request, response: Response ) => {

    // const id : number = request.params.id;    
    const id = request.params.id;
    
    if( !id ) {
        throw new Error( 'Id inválido ' );
    }
    
    // let myResponse: IMyResponse;
    
    const userShowed = await ShowUserUseCase( id );

    /*
    if( !userShowed ) {

        myResponse = {
            status: StatusCodes.BAD_REQUEST
            , message: 'Usuário não econtrado '
        };

    } else {

        myResponse = {
            status: StatusCodes.OK
            , message: `Usuário encontrado`
            , value: id
            ,
            ...userShowed
        };
    };
    */
    // console.log( ` RemoveUserController :: ${myResponse}`);

    const myResponse: IMyResponseData = {
        status: (userShowed ? StatusCodes.OK : StatusCodes.BAD_REQUEST )
        , message: 'Usuário ' + ( userShowed ? 'encontrado' : 'inválido' )
        , value: id
        // ,  ...( userShowed && userShowed )         
        // ,  ... userShowed
        , data: {
            ...userShowed
        }
        
    };

    return(
        response
        .status( myResponse.status )
        .json  ( myResponse )
    )

} ;

export { ShowUserController };