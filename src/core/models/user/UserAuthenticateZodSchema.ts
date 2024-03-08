import {z} from 'zod';
import { TranslationsZod } from '../../../services/Zod/TranslationsZod';

const UserAuthenticationZodSchema = z.object( {

    password    : z
    .string()
    // .required( "O campo Senha é obrigatório")
    // .min(6, "O campo Senha deve ter no mínimo 6 caracteres"),
    // .min(6, TranslationsZod.string.min),
    .min(6, 'O campo senha deve ter no mínimo 6 caracteres' )
    // .refine( (data) => data.length > 6, {message: TranslationsZod.string.min } )

    ,

    username    : z
    .string()
    // .required( "O campo :: username :: é obrigatório")
    .min(6, "O campo :: username :: deve ter no mínimo 6 caracteres")

});

type TypeUserAuthenticationZodSchema = z.infer< typeof UserAuthenticationZodSchema >;

export { TypeUserAuthenticationZodSchema, UserAuthenticationZodSchema };
