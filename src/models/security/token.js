import { Schema,model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

let tokenSchema = new Schema({
    token : {
        type: String,
        required: true
    },
    rol: {
        type :String,
    }
}) 

   let token =  model('Token',tokenSchema);

export default token
