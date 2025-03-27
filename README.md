# SociaLink

## Overview
SociaLink is a real-time chat application that enables users to connect and communicate in different chat rooms. Built with modern web technologies, it provides a seamless chatting experience with a responsive design that works across all devices.

## Features
- **Real-time Messaging:** Instant communication between users using Socket.IO
- **Multiple Chat Rooms:** Various rooms for different topics and interests
- **Responsive Design:** Optimized for both desktop and mobile devices
- **Modern UI:** Clean and intuitive user interface with smooth transitions
- **Contact Form:** Built-in feedback mechanism for users

## Technologies Used
- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript
  - FontAwesome (for icons)
  
- **Backend:**
  - Node.js
  - Express.js
  - Socket.IO (for real-time communication)
  - MongoDB (database)

## Future Improvements
As mentioned in the project interface, the following features are planned for future releases:
- Private Room Creation
- Voice and Video Chat
- Media Sharing Capabilities

## Setup and Installation
1. Clone the repository
   ```
   git clone https://github.com/krishna-nishant/socialink.git
   cd socialink
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Configure environment variables
   - Create a `.env` file in the root directory
   - Add necessary environment variables (MongoDB connection string, etc.)

4. Start the server
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure
- `/public` - Contains all frontend assets
  - `/css` - Stylesheet files
  - `/js` - JavaScript files
  - `/html` - HTML pages
- `/routes` - Express route handlers
- `/controllers` - Business logic
- `/models` - MongoDB schema definitions
- `/utils` - Utility functions
- `server.js` - Main application entry point

## Contact
For any questions or feedback, please reach out through the contact form on the website.