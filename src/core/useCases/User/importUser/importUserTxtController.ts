import fs from 'fs';
import { Request, Response, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ApiError } from '../../../../infra/providers/apis/Error';
import { IMyResponseData } from '../../../interfaces/myResponse/IMyResponse';

// ./ significa a pasta backend 
const myFile = './src/core/useCases/User/importUser/user.txt';



const importUserTxtController: RequestHandler = async (request: Request, response: Response) => {

    if (!fs.existsSync(myFile)) {
        throw new ApiError(`O arquivo '${myFile}' não foi encontrado.`, StatusCodes.NOT_FOUND, 0);
    }

    let fileContent;

    try {
        fileContent = fs.readFileSync(myFile, 'utf8');
    } catch (error) {
        console.log(`Erro na abertura do arquivo: ${error}`, StatusCodes.BAD_REQUEST, 0);
        return(false);
    };

    // Dividir o conteúdo do arquivo em linhas
    const lines = fileContent.split('\n').filter( line => line.trim() != '' );

    // Iterar sobre as linhas e dividir cada linha em colunas separadas por ;
    const columns = lines.map(line => line.split(';'));

    const myData = columns.map( cols => {
        return({
            name: cols[0]
            , birth: cols[1]
        });
    });

    const myUsersImported = JSON.stringify( myData );
    
    const myResponse: IMyResponseData = {
        status: ( myUsersImported ? StatusCodes.OK : StatusCodes.BAD_REQUEST )
        , message: 'Usuarios ' + ( myUsersImported ? 'importados' : 'não lidos' )
        , value: '0'
        , data: {
            ...myData
        }
    }

    // console.log( myResponse );
    return(
        response
        .status ( myResponse.status )
        .send   ( myResponse )
    );
        
};

export {importUserTxtController};
