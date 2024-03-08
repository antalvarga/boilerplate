import {z} from 'zod';
// import { TranslationsZod } from '../../../services/Zod/TranslationsZod';

const UserZodSchema = z.object( {
    // Vide mais detalhes em UserYupSchema
    username    : z
        .string()    
        .min(6, "O campo Nome do usuario deve ter no mínimo 6 caracteres"),
        
   name        : z
       .string()
       .min(6, "O campo Nome deve ter no mínimo 6 caracteres"),                               
       // Transform não funcionou ... Bagaça !
       // .transform( ( namex, name ) => { return name.toUpperCase() } ),
   email       : z
       .string()
       .email("O campo e-mail não foi preenchido corretamente."),
   whatsapp    : z
       .string(),
    //    .matches(/^[0-9]{11}$/, 'O celular deve conter exatamente 11 dígitos numéricos'),
   password    : z
       .string()
       .min(6, "O campo Senha deve ter no mínimo 6 caracteres"),
    secret      : z
       .string(),     
       
    /*   
    birth       : z
       .date()
    */       
       birth       : z
       .string()
    
} );

type TypeUserZodSchema = z.infer< typeof UserZodSchema >;

export { TypeUserZodSchema, UserZodSchema };
