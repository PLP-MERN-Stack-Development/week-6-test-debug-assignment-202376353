const express = require('express');
const app = express();

// Middleware (add your own as needed)
app.use(express.json());

// Placeholder route for health check
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

module.exports = app; 