const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    },
    message: {
        type: String,
        require: true
    }
});

const Contact = mongoose.model('contacts', ContactSchema);

module.exports = Contact;