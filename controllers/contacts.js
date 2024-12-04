const Contact = require('../models/contact.js');

exports.submitForm = async (req, res, next) => {
    try {
        const { name, email, mobile, message } = req.body;

        // Basic validations
        if (!name || !email || !mobile || !message) {
            return res.status(400).json({ message: 'Name, email, mobile and message are required fields' });
        }

        // Create a new contact instance
        const newContact = new Contact({
            name: name,
            email: email,
            mobile: mobile,
            message: message,
        });

        // Save the contact to the database
        await newContact.save();

        res.status(201).json({ message: 'Contact form submitted successfully' });
        // res.status(201).json({ newContact });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};