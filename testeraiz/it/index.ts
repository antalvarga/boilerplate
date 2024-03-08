const PRETA = '\x1b[30m';
const RESET_COR = '\x1b[0m'

const it = ( description: string, callBack: any ) => {

    console.log( PRETA, description );

    callBack();

    console.log( RESET_COR, '' );
    console.log( RESET_COR, '' );

}

export { it };
