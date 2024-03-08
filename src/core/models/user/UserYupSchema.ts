import * as Yup from 'yup';


const UserYupSchema = Yup.object().shape( {

    username    : Yup
    .string()
    .required( "O campo :: username :: é obrigatório")
    .min(6, "O campo Senha deve ter no mínimo 6 caracteres"),
    
   name        : Yup
       .string()
       .required( "O campo Nome é obrigatório" )
       .min(6, "O campo Nome deve ter no mínimo 6 caracteres"),                               
       // Transform não funcionou ... Bagaça !
       // .transform( ( namex, name ) => { return name.toUpperCase() } ),
   email       : Yup
       .string()
       .required( "O campo e-mail deve ser preenchido")
       .email("O campo e-mail não foi preenchido corretamente."),
   whatsapp    : Yup
       .string()
       .required( "O campo whatsapp deve ser preenchido" )
       .matches(/^[0-9]{11}$/, 'O celular deve conter exatamente 11 dígitos numéricos'),
   password    : Yup
       .string()
       .required( "O campo Senha é obrigatório")
       .min(6, "O campo Senha deve ter no mínimo 6 caracteres"),
   secret      : Yup
       .string(),         
   birth       : Yup
       .date()
       .typeError( "Data de nascimento inválida" )
       .max( new Date(), "A data de nascimento não pode ser futura ")
       .test(
           'is-adult',
           'Você deve ser maior de 18 anos',
           ( value ) => {
               if (! value ) return false;


               const birthDate = new Date( value );
               const eighteenYearsAgo = new Date();


               // console.log( eighteenYearsAgo.getFullYear() );
               // console.log( eighteenYearsAgo.getTime );
               // console.log( eighteenYearsAgo.getUTCDate );
               // console.log( birthDate );                                       
               // console.log( birthDate <= eighteenYearsAgo );


               eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);


               // return( birthDate <= eighteenYearsAgo );


               // Para ficar igual ao exemplo
               // https://pt.linkedin.com/pulse/validação-de-formulários-em-typescript-usando-o-yup-de-araujo-neto
               const birthday = value;
               const date = new Date( birthday);
               const now = new Date();
               const idade = now.getFullYear() - date.getFullYear();


               const lReturn = idade > 18;
               /*


               console.clear();
               console.log( ` birthday / value :: ${value}`);
               console.log( ` date :: ${date}`);
               console.log( ` now :: ${now}`);
              
               console.log( "---------------------");                                       
               console.log( `now.getFullYear() :: ${now.getFullYear()}` );
               console.log( `date.getFullYear() :: ${date.getFullYear()}` );
               console.log( `Idade :: ${ idade }` );
               console.log( `> 18 anos :: ${ lReturn }` );
               console.log( "---------------------");

               */


               return ( lReturn );
              
           }
       )
   }
);


export default UserYupSchema;