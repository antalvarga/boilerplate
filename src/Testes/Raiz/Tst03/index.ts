import { soma } from './soma';
// import  {testeraiz}  from '../../../../../testeraiz';
import {testeraiz} from '../../../../testeraiz';

const Tst03 = () => {

    // console.log( '');
    console.log( '\x1b[36m', '.: Ts03 :. ' );

    const result = soma( 1,2,3,4, 5);

    // Cenário 1
    testeraiz.it( 'Cenário 1: Eu quero que este teste passe ', () => {
        
        testeraiz.expect( result ).toBe(  6 );
        testeraiz.expect( result ).toBe( 15 );
    })

    // Cenário 2
    testeraiz.it( 'Cenário 2: Eu espero que o valor de result seja nulo ', () => {
        
        testeraiz.expect( result ).toBeNull();
    })

};

export { Tst03 };