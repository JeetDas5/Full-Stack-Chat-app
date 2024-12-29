const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectDB");
// const userRoutes = require("./routes/index.js");
const router = require("./routes/index.js");
const cookiesParser = require('cookie-parser')
const {app, server} = require('./socket/index.js')

const allowedOrigins = [
  'http://localhost:3000', // For local development
  'https://full-stack-chat-app-frontend.onrender.com', // For deployed frontend
];

// const app = express();
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // Allow cookies and authentication headers
  })
);
console.log(process.env.FRONTEND_URL);

app.use(express.json())
app.use(cookiesParser())

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    message: "Server running at " + PORT,
  });
});

//api endpoints
app.use('/api',router)

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});