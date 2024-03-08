
type expectType = string | number;

const expect = ( result: expectType ) => ({

    toBe: ( expected: expectType ) => {

        if( typeof( result ) !== typeof( expected ) ) { throw new Error( 'Tipos diferentes' ) };

        const myMessageColor = ( result === expected ) ? '\x1b[32m' : '\x1b[31m';
        const myMessageText  = ( result === expected ) ? 'Teste Ok' : 'Teste falhou'; 

        // console.log( ` result: ${result } :: expected: ${expected }` );
        // console.log( ` myMessageColor ${myMessageColor}` );
        // console.log( ` myMessageText: ${myMessageText}` )
        console.log( myMessageColor, myMessageText );
        
    }
    , notToBe: ( expected: expectType ) => {
        
        if( typeof( result ) !== typeof( expected ) ) { throw new Error( 'Tipos diferentes' ) };

        const myMessageColor = ( result !== expected ) ? '\x1b[32m' : '\x1b[31m';
        const myMessageText  = 'Teste' + ( result !== expected ) ? ' Ok' : 'falhou'; 

        console.log( myMessageColor, myMessageText );

    }
    // , toBeNull: ( expected: expectType ) => {
    , toBeNull: () => {
        
        const myMessageColor = ( result == null ) ? '\x1b[32m' : '\x1b[31m';
        const myMessageText  = ( result == null ) ? 'Teste Ok' : 'Teste falhou'; 

        console.log( myMessageColor, myMessageText );

    }

});

export { expectType, expect };
