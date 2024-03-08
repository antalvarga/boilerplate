import { client } from '../../../../../prisma/client';

const ShowUserUseCase = async( id: string ) => {

    const showedUser = await client.user.findFirst( {
        where: {id}
        /*
        , select: {
            username: true
            , name: true
            , email: true
            , birth: true
        }
        */
    });

    return( showedUser );
};

export { ShowUserUseCase};
