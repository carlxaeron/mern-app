const express = require('express');
const app = express();
const port = 5000;

// Middleware for JSON parsing
app.use(express.json());

// Sample route
app.get('/api/sample', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Import post routes
const postRoutes = require('./routes/postRoutes');

// Use post routes
app.use('/api', postRoutes);

// Import home routes
const homeRoutes = require('./routes/homeRoutes');

// Use home routes
app.use('/', homeRoutes);

// Import admin routes
const adminRoutes = require('./routes/adminRoutes');

// Use admin routes
app.use('/api', adminRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
