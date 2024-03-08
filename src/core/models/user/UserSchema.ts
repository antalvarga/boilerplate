// TODO - Estudar como usar o model no schema.prisma

const UserSchema = {
  
    name: {
        type: String
        , required: true
    }
    , email: {
        type: String
        , required: true
    }
    , whatsapp: {
        type: String
        , required: true
    }
    , password: {
        type: String
        , required: true
    }
    , birth : {
        type: Date
        , required: true
    }
    , secret: {
        type: String
        , required: false
    }
 };
 
 
 export default UserSchema;