import { soma } from './soma'


const Tst01 = () => {

    const n1 = 10;
    const n2 = 20;
    
    const result = soma( n1, n2 );
    
    const expected = 30;
    
    console.log( '');
    console.log( '\x1b[36m', '.: Ts01 :. ' );


    if( result == expected ){
        
        console.log( '\x1b[32m', 'Teste passou ' );
    } else {

        console.log( '\x1b[31m', 'Teste falhou ...' );
    }

}

export { Tst01 };

