const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic routes
app.get('/', (req, res) => {
  res.json({
    message: 'Health Management API Server is running!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// API routes placeholder
app.get('/api', (req, res) => {
  res.json({
    message: 'Health Management API',
    endpoints: {
      health: '/health',
      users: '/api/users',
      appointments: '/api/appointments',
      records: '/api/records'
    }
  });
});

// Users routes (placeholder)
app.get('/api/users', (req, res) => {
  res.json({
    message: 'Users endpoint',
    users: []
  });
});

app.post('/api/users', (req, res) => {
  const { name, email, age } = req.body;
  
  // Basic validation
  if (!name || !email) {
    return res.status(400).json({
      error: 'Name and email are required'
    });
  }
  
  res.status(201).json({
    message: 'User created successfully',
    user: { id: Date.now(), name, email, age }
  });
});

// Appointments routes (placeholder)
app.get('/api/appointments', (req, res) => {
  res.json({
    message: 'Appointments endpoint',
    appointments: []
  });
});

app.post('/api/appointments', (req, res) => {
  const { userId, doctorId, date, time, type } = req.body;
  
  if (!userId || !doctorId || !date || !time) {
    return res.status(400).json({
      error: 'UserId, doctorId, date, and time are required'
    });
  }
  
  res.status(201).json({
    message: 'Appointment created successfully',
    appointment: { id: Date.now(), userId, doctorId, date, time, type }
  });
});

// Health records routes (placeholder)
app.get('/api/records', (req, res) => {
  res.json({
    message: 'Health records endpoint',
    records: []
  });
});

app.post('/api/records', (req, res) => {
  const { userId, type, value, unit, date } = req.body;
  
  if (!userId || !type || !value) {
    return res.status(400).json({
      error: 'UserId, type, and value are required'
    });
  }
  
  res.status(201).json({
    message: 'Health record created successfully',
    record: { id: Date.now(), userId, type, value, unit, date: date || new Date().toISOString() }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Health Management Server is running on http://localhost:${PORT}`);
  console.log(`📋 API Documentation available at http://localhost:${PORT}/api`);
});

module.exports = app;