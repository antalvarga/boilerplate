import 'dotenv/config';
//
// import 'express-async-errors';
import { server } from './src/infra/server';
//
//import { Request, Response, NextFunction } from 'express';

//
//import { Error } from './src/infra/providers/Errors';

// Tem que importar o tratamento de erro ... aqui é so um teste
// import { Email } from './src/services/Email';
// import { NextFunction } from 'express';
// server.use( Email );
// Email('SUBJECT TESTE', 'asvarga@gmail.com');
// Email();
// 

const myPort = process.env.PORT || 3333;


/*
server.use( (error: Error, request: Request, response: Response, next: NextFunction ) => {

    // console.log( `passou no server :: Error ` );
    
    return(         
        response.json( {
        status: "Error"
        , message: `Server :: Error = ${error.message} `

    }));

} );
*/
//



// server.use( Error );

server.listen( myPort, () => {
    console.log( `Server is running in port ${ myPort } ... ` );
});
