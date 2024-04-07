const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    mobile: { type: Number },
    message: { type: String }
});

const Contact = mongoose.model('contacts', ContactSchema);

module.exports = Contact;