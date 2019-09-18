import { Schema, } from 'mongoose';


let token = new Schema({
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
    token
}