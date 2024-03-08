import {TesteRaiz} from './Raiz';


console.clear();
console.log( '');
console.log( '');
console.log( '\x1b[34m', '.: TESTE RAIZ :. ' );

// TesteRaiz.Tst01();
const testFunctions = Object.values( TesteRaiz );

testFunctions.forEach(( testFunction: () => void ) => {
    testFunction();
});

console.log( '');
console.log( '');
console.log( '\x1b[34m', '.: FIM DOS TESTES :. ' );
console.log( '\x1b[0m', '' );
console.log( '');
console.log( '');
