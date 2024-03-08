const MAGENTA = '\x1b[35m';
const RESET_COR = '\x1b[0m'

const test = ( description: string, callBack: any ) => {

    console.log( MAGENTA, description );

    callBack();

    console.log( RESET_COR, '' );
    console.log( RESET_COR, '' );

}

export { test };
