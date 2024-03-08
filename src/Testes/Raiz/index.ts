import * as Ts01 from './Tst01';
import * as Ts02 from './Tst02';
import * as Ts03 from './Tst03';


/*
console.log( '\x1b[30m', 'Testar cores' );


- Preto: `\x1b[30m`
- Vermelho: `\x1b[31m`
- Verde: `\x1b[32m`
- Amarelo: `\x1b[33m`
- Azul: `\x1b[34m`
- Magenta: `\x1b[35m`
- Ciano: `\x1b[36m`
- Branco: `\x1b[37m`

Além disso, você pode adicionar estilos adicionais, como negrito, sublinhado e piscante, usando os seguintes códigos:

- Negrito: `\x1b[1m`
- Sublinhado: `\x1b[4m`
- Piscante: `\x1b[5m`

Para redefinir o estilo para o padrão, você pode usar o código `\x1b[0m`.

A combinação desses códigos permite que você personalize a aparência do texto no console.


console.log( '\x1b[30m', 'Preto' );
console.log( '\x1b[31m', 'Vermelho' );
console.log( '\x1b[32m', 'Verde' );
console.log( '\x1b[33m', 'Amarelo' );
console.log( '\x1b[34m', 'Azul' );
console.log( '\x1b[35m', 'Magenta' );
console.log( '\x1b[36m', 'Ciano' );
console.log( '\x1b[37m', 'Branco' );

console.log( '\x1b[1m', 'Negrito' );
console.log( '\x1b[5m', 'Piscante' );
console.log( '\x1b[4m', 'Sublinhado' );

console.log( '\x1b[0m', 'Redefine' );


*/


const TesteRaiz = {

    ...Ts01,
    ...Ts02,
    ...Ts03,

}


// console.log( '\x1b[30m', 'Vai chamar Ts01' );

// Ts01;

// console.log( '\x1b[30m', 'Chamou Ts01' );

// TesteRaiz.Ts01;
export {TesteRaiz };