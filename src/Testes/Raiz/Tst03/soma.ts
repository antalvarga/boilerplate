

/*
function soma() {

    return(

        arguments.reduce( (memo, current, 0) => {
            memo + current;
        })
    )

}
*/

const soma = ( ...valores: number[] ): number => {

    let total = 0;

    valores.forEach( valor  => {

        total += valor;
        
    });

    return( total );
}

export { soma };

