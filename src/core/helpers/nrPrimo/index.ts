/*
o código abaixo itera por números de 2 até o parâmetro. 
Se encontrar algum divisor além de 1 e ele mesmo, o número não é primo. 
Se chegar até o próprio número sem encontrar nenhum divisor além de 1 e 
ele mesmo, o número é primo.
*/

const verificaSeNumeroPrimo = ( numero: number): boolean => {

    let lRetorno = false;

    if( numero > 1 ) {

        for( let i = 2; i <= numero; i++ ){

            // Se numero é divisivel por i, então não é primo
            if( numero % i == 0 ){
                // Se numero for igual a i então, é nr primo
                if( numero == i ) {
                    lRetorno = true;
                    break;
                };

                break;
            }
            
        }
    }

    return( lRetorno);

}

const nrPrimo = () => {

    console.log( `:: nrPrimo :: `);

    for( let i = 0; i <= 15; i++ ){
        if( verificaSeNumeroPrimo( i ) ) {
            console.log( `Nr primo : ${i}`);
        }
    }

    return(0)
}

export {nrPrimo};