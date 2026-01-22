require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Ensure feedbacks.txt file exists
const feedbackFile = path.join(__dirname, 'feedbacks.txt');
if (!fs.existsSync(feedbackFile)) {
  fs.writeFileSync(feedbackFile, '================================================================================\n                    BOOKMYSTAY FEEDBACK STORAGE\n================================================================================\n\n');
}

// Routes
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'BookMyStay API is running! ✅'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'healthy'
  });
});

// ✅ FEEDBACK ENDPOINT - Save feedback directly to text file
app.post('/api/feedback', (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    // Validate required fields
    if (!name || !email || !mobile || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Create feedback entry
    const timestamp = new Date().toLocaleString();
    const separator = '================================================================================';
    const feedbackEntry = `
${separator}
Date & Time: ${timestamp}
Name: ${name}
Email: ${email}
Mobile: ${mobile}
Message: ${message}
${separator}

`;

    // Append to feedbacks.txt
    fs.appendFileSync(feedbackFile, feedbackEntry, 'utf8');

    console.log('✅ Feedback saved:', { name, email, mobile });

    res.status(201).json({
      success: true,
      message: '✅ Feedback submitted successfully!',
      data: { name, email, mobile, message }
    });
  } catch (error) {
    console.error('❌ Error saving feedback:', error);
    res.status(500).json({
      success: false,
      message: 'Error: ' + error.message
    });
  }
});

// ✅ GET ALL FEEDBACKS - Read from text file
app.get('/api/feedback', (req, res) => {
  try {
    if (fs.existsSync(feedbackFile)) {
      const content = fs.readFileSync(feedbackFile, 'utf8');
      res.json({
        success: true,
        message: 'Feedbacks retrieved',
        file: feedbackFile,
        content: content
      });
    } else {
      res.json({
        success: true,
        message: 'No feedbacks yet'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error: ' + error.message
    });
  }
});

// Auth routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    res.json({
      success: true,
      message: 'User registered successfully',
      user: { name, email },
      token: 'demo-token-' + Date.now()
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    res.json({
      success: true,
      message: 'Login successful',
      user: { name: 'Demo User', email },
      token: 'demo-token-' + Date.now()
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log('\n🚀 =====================================');
  console.log(`📡 Server: http://localhost:${PORT}`);
  console.log(`🏥 Health: http://localhost:${PORT}/api/health`);
  console.log(`📝 Feedbacks saved to: ${feedbackFile}`);
  console.log('🚀 =====================================\n');
});