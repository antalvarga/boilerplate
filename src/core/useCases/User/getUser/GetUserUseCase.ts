// import { Request, Response } from 'express';
import { client } from '../../../../../prisma/client';
import { IQuery, IQueryProps } from '../../../interfaces/Queries/IQueryProps';

// const GetUserUseCase = async ( myQuery: IQuery ) => {
const GetUserUseCase = async ( myQuery: IQueryProps ) => {

    // const total: number = await client.user.count() || 0;
    const myTotal   = await client.user.count();

    const myPage   = parseInt( myQuery.page  as string, 10 );
    const myLimit  = parseInt( myQuery.limit as string, 10 );
    const myFilter = myQuery.filter || '1=1';

    // const listUsers = await client.user.findMany()        
    const listUsers = await client.user.findMany( {
        skip: ( myPage -1 ) * myLimit,
        take: myLimit
    });    
    
    const myResponse = {
        tablename: 'users'
        , totalRecords: myTotal
        , recordsRead: listUsers.length //  myQuery.limit
        , pagination: {
            page: myQuery.page
            , pagesize: myQuery.limit
            , totalpages: Math.ceil( myTotal / myLimit )
        }
        , data: listUsers 
    };
    
    return( myResponse );
    
};

export { GetUserUseCase };
