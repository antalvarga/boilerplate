// import 'dotenv/config';

import {client} from '../../../../../prisma/client';
const GetSecret = async ( id: string ) => {

    /*
    const mySecret = await client.user.findFirst( {
        where: {id}
        , select: { 
            secret: true
         }
    });
    */

    // let mySecret; // : string;

    const myUser = await client.user.findFirst( {
        where: {id}
    })
    .then();

    // const otherSecret = process.env.SECRET || false;
    // const otherSecret = process.env.SECRET || '';

    const mySecret = myUser?.secret ;

    return( mySecret );

};

export { GetSecret };
