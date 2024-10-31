
# Full Stack Chat App

![Full Stack Chat App](./Full%20Stack%20Chat%20App.png)

A real-time chat application built with the **MERN stack** and **Socket.io**, providing a seamless messaging experience with real-time updates. This app leverages **React** for the frontend, **Node.js** with **Express** for the backend, **MongoDB** for data storage, and **Redux Toolkit** for efficient state management. 

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-time Messaging:** Enjoy instant messaging using WebSockets powered by Socket.io.
- **User Authentication:** Secure login and signup options.
- **One-to-One Conversations:** Private chats with real-time updates.
- **User Profiles:** Customize and edit your profile details.
- **Responsive UI:** Built with a mobile-first approach for an optimal user experience across devices.

## Tech Stack

- **Frontend:** React, Redux Toolkit
- **Backend:** Node.js, Express, Socket.io
- **Database:** MongoDB
- **State Management:** Redux Toolkit
- **Real-time Communication:** Socket.io
- **Styling:** Tailwind CSS

## Getting Started

To run this application on your local machine, follow these steps.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/full-stack-chat-app.git
   cd full-stack-chat-app
   ```

2. **Install dependencies**:

   Navigate to both the `client` and `server` directories and install the dependencies for each:

   ```bash
   # For backend
   cd server
   npm install
   ```

   ```bash
   # For frontend
   cd ../client
   npm install
   ```

3. **Environment Variables**:

   In the `server` directory, create a `.env` file for the following environment variables:

   ```plaintext
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET_KEY=your_jwt_secret
   FRONTEND_URL = http://localhost:3000 
   ```

4. **Run the application**:

   In separate terminal windows, run the backend and frontend servers:

   ```bash
   # Backend (in the server directory)
   npm run dev
   ```

   ```bash
   # Frontend (in the client directory)
   npm start
   ```

5. **Access the App**:

   Open your browser and go to `http://localhost:3000`.

## Usage

1. **Register/Login**: Sign up as a new user or log in to start chatting.
2. **Add Friends**: Search for users and start a conversation.
3. **Real-Time Chat**: Start messaging and see real-time updates.

## Project Structure

Here's a high-level overview of the project folders and files:

```plaintext
full-stack-chat-app/
│
├── client/                      # Frontend code (React)
│   ├── public/
│   └── src/
│       ├── components/          # Reusable React components
│       ├── redux/               # Redux slices
│       ├── layout/              # Layout page
│       ├── helpers/             # Helpers folder
│       ├── pages/               # App pages
│       └── App.js               # Main App component
│
├── server/                      # Backend code (Node.js, Express)
│   ├── config/                  # Database config and environment setup
│   ├── controllers/             # Route handlers
│   ├── models/                  # Mongoose models
│   ├── routes/                  # Express routes
│   ├── socket/                  # Socket.IO setup
│   └── server.js                # Main entry point
│
├── Full Stack Chat App.png      # Project image for README
└── README.md                    # Project README
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the project.
2. Create your feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
