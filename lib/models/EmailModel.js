import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const EmailModel = mongoose.models.emails || mongoose.model('emails', Schema);

export default EmailModel;