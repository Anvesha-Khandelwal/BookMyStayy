require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); // ✅ This is Mongoose
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB Atlas using Mongoose
const connectDB = async () => {
  try {
    // Check if connection string exists
    if (!process.env.MONGODB_URI) {
      throw new Error('❌ MONGODB_URI not found in .env file');
    }

    console.log('🔄 Connecting to MongoDB...');

    // This line uses Mongoose to connect to MongoDB Atlas
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('✅ MongoDB Connected Successfully!');
    console.log('📦 Database Name:', mongoose.connection.name);
    console.log('🌍 Host:', mongoose.connection.host);
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
    console.log('\n💡 Check:');
    console.log('1. Is MONGODB_URI correct in .env?');
    console.log('2. Did you replace <password> with actual password?');
    console.log('3. Is your IP whitelisted (0.0.0.0/0)?');
    console.log('4. Is cluster running on MongoDB Atlas?\n');
    process.exit(1);
  }
};

// Connect to database
connectDB();

// ✅ Create a Mongoose Schema (optional but recommended)
const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Create Model
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Routes
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'BookMyStay API is running!',
    database: mongoose.connection.readyState === 1 ? 'Connected ✅' : 'Disconnected ❌'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'healthy',
    database: {
      status: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
      name: mongoose.connection.name,
      host: mongoose.connection.host
    }
  });
});

// ✅ Save feedback to MongoDB Atlas using Mongoose
app.post('/api/feedback', async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    // Create new feedback document
    const feedback = new Feedback({
      name,
      email,
      mobile,
      message
    });

    // Save to MongoDB Atlas
    await feedback.save();

    console.log('✅ Feedback saved to MongoDB:', feedback);

    res.json({
      success: true,
      message: 'Feedback saved to database!',
      data: feedback
    });
  } catch (error) {
    console.error('❌ Error saving feedback:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// ✅ Get all feedbacks from MongoDB
app.get('/api/feedback', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: feedbacks.length,
      data: feedbacks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
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
  console.log('🚀 =====================================\n');
});