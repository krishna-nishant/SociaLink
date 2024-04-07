const express = require('express');
const multer = require('multer');
const router = express.Router();
const contactsController = require('../controllers/contacts.js');

const upload = multer(); // Initialize multer

router.post('/contact', upload.none(), contactsController.submitForm);

module.exports = router;

/* 
If the data is being correctly saved when sent as raw data through Postman but not when submitted through form data, the issue may lie in how your backend is parsing the form data.

When data is submitted through form data, it is typically encoded using the multipart/form-data encoding type. In contrast, when sent as raw data, it might be sent as JSON.

Make sure your backend is configured to handle form data properly. In Express.js, for example, you would typically use middleware like multer to parse form data. Here's an example of how you might configure your Express app to handle form data:


In this example, upload.none() tells multer to parse only the fields and ignore any files in the form data. This would work for your current use case where you're only expecting fields like name, email, mobile, and message.

Ensure that you've configured your backend to properly parse form data, and it should resolve the issue you're experiencing. If you're still encountering problems, please provide more details, and we can further assist you. */