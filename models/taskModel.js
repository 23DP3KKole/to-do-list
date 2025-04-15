const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskScherma = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    },
    createdAt:{
        type: String,
        required: false
    },
    updatedAt:{
        type: String,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Task', taskScherma)