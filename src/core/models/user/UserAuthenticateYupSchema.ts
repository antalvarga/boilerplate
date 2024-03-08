import * as Yup from 'yup';


const UsrAuthenticateYupSchema = Yup.object().shape({

    password    : Yup
    .string()
    .required( "O campo Senha é obrigatório")
    .min(6, "O campo Senha deve ter no mínimo 6 caracteres"),

    username    : Yup
    .string()
    .required( "O campo :: username :: é obrigatório")
    .min(6, "O campo :: username :: deve ter no mínimo 6 caracteres")
});

export default UsrAuthenticateYupSchema;