const express = require('express');
const app = express();
const PORT = 5000;

// Middleware (optional, add more as needed)
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Smart Job Tracker API!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
