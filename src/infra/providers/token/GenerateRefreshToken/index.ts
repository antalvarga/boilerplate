import dayjs from 'dayjs';
import { client } from '../../../../../prisma/client';

const GenerateRefreshToken = async ( userId: string ) => {

    const dataAtual = dayjs();
    const novaData  = dataAtual.add( 30, 'second');
    const expiredIn = novaData.unix();

    const data = {
        userId
        , expiredIn
    };

    // const generatedRefreshToken = await client.refreshToken.create({ data })
    // return( generatedRefreshToken );
    return( data );
};

export { GenerateRefreshToken };
