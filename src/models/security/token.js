import { Schema, } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

let tokenSchema = new Schema({
    token : {
        type: String,
        required: true
    },
    rol: {
        type :String,
        required: true
    }
}) 


export{
    tokenSchema
}