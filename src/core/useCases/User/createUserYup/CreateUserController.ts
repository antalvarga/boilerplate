import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';
import { StatusCodes } from 'http-status-codes';

import { IUserRequest } from '../../../interfaces/User/IUserRequest';

import UserYupSchem from '../../../models/user/UserYupSchema';
import * as yup from 'yup';
/*
class CreateUserController {

    async handle( request: Request, response: Response) {
*/
const CreateUserController = async ( request: Request, response: Response) => {

    /*
    const {
        name
        , username
        , email
        , whatsapp
        , password
        , birth 
    } = request.body;
    */

    const dtoUser : IUserRequest = request.body;
    // console.log( dtoUser );
    // console.log( `:: CreateUserController :: `);
    
    // *** VALIDAÇÃO DE ESTRUTURA DE DADOS (YUP / ZOD ...) ***
    try {
        await UserYupSchem.validate( dtoUser );

    } catch( error ) {
        
        let nPointer = 0;
        
        const yupError = error as yup.ValidationError; 
        // const errors : Record< string, string > = {};
        const errors : Record< number, string > = {};
        /*
        yupError.inner.forEach( error => {
            console.log( ++nPointer );

            // if( error.path === undefined ) return;
            if( !error.path ) return;
            /*
            if( !error.path ) {
                error.path = String( nPointer );
            };
            
            errors[ error.path ] = error.message;
        });
        */

        yupError.inner.map( error => {

            if( !error ) return;
            
            //  errors[ error.path ] = error.message;
            errors[ nPointer ] = ` ${error.path} :: ${error.message }`;
            
            console.log( ++nPointer);
        })

        const errorJSON = {
            status: ` ${ StatusCodes.BAD_REQUEST}`,
            messsage: `Erro de validação`, // :: ${nPointer}`,
            // errors: JSON.stringify( errors )
            errors: ` ${error} `
        };

        return(
            response
            .status( StatusCodes.BAD_REQUEST )
            // .send  ( `{message: Erro :: Validação :: ${ myErrors }}` )
            // .json( errorJSON )
            // .json( yupError )
            .send( errorJSON )
            // .send( error )
        );
    };


    // const createUserUseCase = new CreateUserUseCase();

    /*
    const user = CreateUserUseCase( {
        name
        , username
        , email
        , whatsapp
        , password
        , birth 
    } );
    */
    const user = await CreateUserUseCase( dtoUser );

    let myResponse;

    if( !user ) {

        myResponse = {
            status: StatusCodes.BAD_REQUEST
            , message: 'Usuário já cadastrado'

        }

    } else {

        const myUser = JSON.stringify( user );
        // const myUser = json( user );

        myResponse = {
            status: StatusCodes.CREATED
            , message: 'Usuário criado com sucesso'
            , user: myUser
        }

    };

    return(
        response
        .status ( myResponse.status )
        .json   ( myResponse )            
    )

};

export { CreateUserController };