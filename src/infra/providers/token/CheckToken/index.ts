import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
// import {verify } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';

import {Secret } from '../../secret';

import { IMyResponse } from '../../../../core/interfaces/myResponse/IMyResponse';
import { Providers } from '../..';

const checkToken = async ( request: Request, response: Response, next: NextFunction ) => {

    let myResponse: IMyResponse;

    const id = request.params.id;
    if( !id ) { throw new Error( 'Id inválido ' ); };

    const authToken = request.headers.authorization;
    if( !authToken ) { throw new Error( 'Token is missing...') };

    // Desestruturar o token bearer recebido
    // const token = authHeader && authHeader.split(' ')[1];
    const [, token ] = authToken.split( ' ' );

    const secret = await Providers.Secret.GetSecret(id).then();
    if( !secret ) {throw new Error( "Secret inválido ") }

    // const mySecret = JSON.stringify(secret);// || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDQ1Njk4MDcsImV4cCI6MTcwNDU2OTg2Nywic3ViIjoiNWY4ZGQ2MTUtZjRlNC00ZjhlLTlhMWUtYWFhMWUzZDQ0NzZjIn0.ZUbPArTpd-vAHaH_Og3PxlI6mlJLcyUYOgKPvbdDJsU'
    const mySecret = secret;// || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDQ1Njk4MDcsImV4cCI6MTcwNDU2OTg2Nywic3ViIjoiNWY4ZGQ2MTUtZjRlNC00ZjhlLTlhMWUtYWFhMWUzZDQ0NzZjIn0.ZUbPArTpd-vAHaH_Og3PxlI6mlJLcyUYOgKPvbdDJsU'

    try{
        jwt.verify( token, mySecret )

        return( next() );

    } catch( error ) {

        return(
            response
            .status( StatusCodes.UNAUTHORIZED )
            .send  ( `Acesso negado ${error}` )
        )
    }

};


export { checkToken };


