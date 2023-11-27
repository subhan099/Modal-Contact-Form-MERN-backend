const mongoose = require ('mongoose');
const requestSchema = mongoose.Schema({
    firstName : {
        type: String,
        required: true,
    },
    lastName : {
        type: String,
        required: true, 
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber : {
        type: String,
        required: true,
    },
    message : {
        type: String,
        required: true,
    },
    createdAt : {
        type:Date,
        default: Date.now,
    }

});

const requestModel = mongoose.model( "request", requestSchema);
module.exports = requestModel;
