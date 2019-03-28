const mongoose = require('mongoose')
//create a schema
const Schema = mongoose.Schema
const contactSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
        },
        mobile:{
            type: String,
            required: true
        }
})
//create a model based on schema
const Contact = mongoose.model('Contact',contactSchema)
module.exports = {
    Contact
}