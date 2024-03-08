import { RequestHandler } from 'express';
import { soma } from './soma';

const Tst02 = () => {

    console.log( '');
    console.log( '\x1b[36m', '.: Ts02 :. ' );

    /*
    type ResultType = string | number;

const expect = (result: ResultType): void => {
    if (typeof result === 'string') {
        // Lógica para lidar com parâmetro do tipo string
        console.log("Versão para string: " + result);
    } else if (typeof result === 'number') {
        // Lógica para lidar com parâmetro do tipo number
        console.log("Versão para número: " + result);
    } else {
        // Lógica para outros tipos, se necessário
        console.log("Tipo não suportado");
    }
};

expect("teste");   // Chama a lógica para string
expect(42);        // Chama a lógica para número


const expect = ( result: string ) => ( {

    const expect = ( result: number ) => ( {
    */

    type expectType = string | number;

    const expect = ( result: expectType ) => ( {

        toBe: ( expected: expectType ) => {

            // console.log( 'toBe ***')
            // console.log( '\x1b[30m', 'toBe');            
            
            // console.log( `result : ${result}` );
            // console.log( `expected: ${ expected }`);

            if( typeof(result) !== typeof(expected) ) {
                throw new Error( 'Tipos diferentes')
                // console.log( 'Tipos diferentes');
                // return( false );
            };


            if( result === expected ){
    
                console.log( '\x1b[32m', 'Teste passou');
            } else {
                
                console.log( '\x1b[31m', 'Teste falhou');
            }

            // console.log( ' ' );
        },

        notToBe: ( expected: number ) => {

            if( result !== expected ) {

                console.log( '\x1b[32m', 'Teste passou ');
            } else {
                
                console.log( '\x1b[31m', 'Teste falhou ');
            };

            // console.log( ' ' );
        }

    }) ;

    // const it = ( description: string, cb: RequestHandler ) => {
    const it = ( description: string, cb: any ) => {

        console.log(  '\x1b[30m', description );
        
        cb();
        
        console.log(  '\x1b[0m', '' );
        console.log(  '\x1b[0m', '' );

    }

    // it( 'Eu espero que a função soma ao receber 2 valores retorne a soma deles', () => {
    it( 'Should sum two values and return 50', () => {
        const n1 = 10;
        const n2 = 40;
        const result = soma( n1, n2 );
        const expected = 50;

        // console.log( `it :: result: ${result}` );

        // expect( result, expected );
        expect( result ).toBe( expected );

    } );

    
    it( 'Eu espero que a função soma retorne um valor diferente de 50', () => {
        const n1 = 10;
        const n2 = 40;
        const result = soma( n1, n2 );
        const expected = 50;

        // expect( result, expected );
        expect( result ).notToBe( expected);

    } );


    it( 'Cenário clean: ', () => {

        expect( soma( 10, 20 ) ).toBe( 30 );
        expect( soma( 10, 20 ) ).notToBe( 30 );
    } )

    



};

export { Tst02 };




