import { client } from '../../../../../prisma/client';


const RemoveUserUseCase = async ( id : string ) => {

    // const deletedUser = await client.user.delete()
    const deletedUser = await client.user.findFirst({
        where: {
            id: id
        }
    })

    return( deletedUser );
};

export { RemoveUserUseCase };
