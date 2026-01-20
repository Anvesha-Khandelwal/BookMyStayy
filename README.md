# 🌍 BookMyStay - Premium Hotel Booking Platform

A modern, full-stack hotel booking website built with React, Node.js, Express, and MongoDB. Features a beautiful UI, secure authentication, real-time booking system, and comprehensive hotel management.

![BookMyStay](https://img.shields.io/badge/BookMyStay-Hotel%20Booking-blue)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-9.0.1-47A248)

---

## ✨ Features

### Frontend
- 🎨 **Modern React UI** - Beautiful, responsive design with smooth animations
- 🔍 **Advanced Search** - Search hotels by city, filter by price and rating
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🔐 **User Authentication** - Secure login and registration with JWT
- 💳 **Booking System** - Complete booking flow with offer codes
- 📊 **User Dashboard** - View and manage all bookings
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

### Backend
- 🚀 **RESTful API** - Clean, well-structured API endpoints
- 🔒 **JWT Authentication** - Secure token-based authentication
- 💾 **MongoDB Database** - Scalable NoSQL database
- 🎫 **Offer System** - Discount codes and promotional offers
- 📝 **Booking Management** - Complete booking lifecycle
- 🧮 **Bill Calculation** - Automatic tax and discount calculations

---

## 🗂️ Project Structure

```
BookMyStay/
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── utils/           # API utilities
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── controllers/         # Business logic
│   ├── middleware/          # Auth middleware
│   ├── utils/               # Utility functions
│   ├── server.js            # Express server
│   ├── seedData.js          # Database seeding
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/BookMyStay.git
cd BookMyStay
```

#### 2. Backend Setup

```bash
cd backend
npm install

# Create .env file
cp .env.example .env

# Edit .env and add your MongoDB connection string
# MONGO_URI=mongodb://localhost:27017/bookmystay
# Or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/bookmystay

# Seed the database with sample data
npm run seed

# Start the backend server
npm run dev
```

The backend will run on `http://localhost:5000`

#### 3. Frontend Setup

```bash
cd frontend
npm install

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:3000`

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Hotels
- `GET /api/hotels` - Get all hotels
- `GET /api/hotels/:id` - Get hotel by ID
- `GET /api/hotels/search?q=city` - Search hotels

### Bookings
- `POST /api/bookings` - Create booking (requires auth)
- `GET /api/bookings` - Get user bookings (requires auth)
- `GET /api/bookings/:id` - Get booking by ID (requires auth)

### Offers
- `POST /api/offers/validate` - Validate offer code

---

## 🎨 Key Features Explained

### 1. Hotel Search & Filtering
- Search by city name
- Filter by price range (slider)
- Filter by minimum rating
- Sort by price (low to high, high to low) or rating

### 2. Booking System
- Select check-in and check-out dates
- Choose number of guests and rooms
- Apply offer codes for discounts
- Automatic bill calculation with taxes
- Secure booking confirmation

### 3. User Dashboard
- View all bookings
- See booking status (Pending/Confirmed)
- Track booking details and amounts

### 4. Offer Codes
- Apply discount codes during booking
- Percentage or fixed amount discounts
- Automatic validation and application

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router** - Navigation
- **Vite** - Build tool
- **CSS3** - Styling with custom properties

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

---

## 📝 Environment Variables

Create a `.env` file in the `backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your-secret-key
PORT=5000
TAX_PERCENTAGE=18
SERVICE_FEE_PERCENTAGE=5
```

---

## 🎯 Usage Examples

### Register a New User
```javascript
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Create a Booking
```javascript
POST /api/bookings
Headers: { Authorization: "Bearer <token>" }
{
  "hotelId": "hotel_id_here",
  "checkInDate": "2024-01-15",
  "checkOutDate": "2024-01-18",
  "numberOfRooms": 1,
  "numberOfGuests": 2,
  "guestDetails": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890"
  },
  "offerCode": "WELCOME20"
}
```

---

## 🎨 UI/UX Highlights

- **Modern Design** - Clean, professional interface
- **Smooth Animations** - Fade-in, slide-up effects
- **Responsive Layout** - Mobile-first approach
- **Intuitive Navigation** - Easy-to-use interface
- **Loading States** - Spinner animations
- **Toast Notifications** - User feedback
- **Color Scheme** - Professional cyan and gold accents

---

## 🔮 Future Enhancements

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Email notifications
- [ ] Hotel reviews and ratings
- [ ] Image galleries
- [ ] Map integration
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] Real-time availability
- [ ] Wishlist functionality

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Built with ❤️ for travelers around the world

---

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the database solution
- All the open-source contributors

---

## ⭐ Show Your Support

If you find this project useful, please give it a star! ⭐

---

**Made with ❤️ for travelers around the world**
