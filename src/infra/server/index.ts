// import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import express from 'express';
import routes from '../../routes';
import { Error } from '../providers/middlewares/Errors';
// import { generateSecret } from '../providers/secret/generateSecret';
// import { TranslationsZod } from '../../services/Zod/TranslationsZod';

const server = express();
const db = process.env.DATABASE || 'postg';

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

server.use( express.json() );
server.use( routes );

console.log( `Timezone :: ${ timezone }` );
console.log( `Database :: ${ db }` );

// const secret = generateSecret();
// Seu segredo JWT d50be7ebd35bdb485b7b900e91687051a6c010c85ab67c9280fbb92cf3207754
// Seu segredo JWT 164061aa6fac061455a54a940f4302038bef49a36eb72335e108e588b99bb98a
// console.log( 'Seu segredo JWT', secret );

/*
server.get( '/', (req, res) => {
    return( res.send('Obrigado Deus - Hello word - Novo '));
});
*/


server.use( Error );

export { server };
