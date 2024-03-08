
const isFibonacci = () => {

    let inicio = 1;
    let fim = 30;

    let atual = 0;
    let proximo = 0;

    /*

    do {

       proximo = inicio + atual;

       console.log( proximo );    

       atual = inicio;
       inicio = proximo;

    } while( proximo <= fim )
    */
    while( proximo <= fim ) {
 
        proximo = inicio + atual;
 
        if( proximo >= fim ) {
            break;
        }
 
        console.log( proximo );    
 
        atual = inicio;
        inicio = proximo;
 
    }


}

export {isFibonacci}


const nextFibonacci = ( nowFibo: number ) => {

    // const nextFibo = nowFibo == 1 ? nowFibo: nextFibonacci( nowFibo -1 )+ nextFibonacci(nowFibo -2);
    const nextFibo  : number = nowFibo > 1 ? ( nextFibonacci( nowFibo -1) + nextFibonacci( nowFibo -2 ) ) : nowFibo;
    // const nextFibo: number = nextFibonacci( nowFibo -1 ) + nextFibonacci( nowFibo -2 );

    return( nextFibo );

}

const doFibonnaci = () => {
    
    const limit = 30;

    /*
    
    for( let i = 1; i <= limit; i++ ){
        console.log( nextFibonacci( i ) );
    }
    
    */

    for( let i =1; i <= limit; i++ ) {

        let myFibo = nextFibonacci( i );

        console.log( myFibo );

        if( myFibo >= limit ){
            break;
        }
    }

}

export { doFibonnaci }