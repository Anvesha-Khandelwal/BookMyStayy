# 🌍 BookMyStay - Premium Hotel Booking Platform

A modern hotel booking web application built with vanilla JavaScript, Node.js, Express, and MongoDB. Features a clean UI, secure authentication, real-time booking system, and comprehensive hotel management.

![BookMyStay](https://img.shields.io/badge/BookMyStay-Hotel%20Booking-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

---

## ✨ Features

### 🎨 Frontend
- **Modern Vanilla JavaScript** - Fast, lightweight, no framework overhead
- **Responsive Design** - Works seamlessly across desktop, tablet, and mobile
- **Interactive UI** - Smooth transitions and user-friendly interfaces
- **Multi-page Application** - Dedicated pages for bookings, hotels, listings, and feedback
- **Custom Styling** - Professional CSS with modern design patterns

### 🚀 Backend
- **RESTful API** - Clean, scalable API architecture
- **JWT Authentication** - Secure token-based user authentication
- **MongoDB Integration** - NoSQL database for flexible data management
- **Booking Management** - Complete booking lifecycle handling
- **Offer System** - Promotional codes and discount management
- **Auto Bill Calculation** - Taxes, service fees, and discounts

---

## 🗂️ Project Structure

```
BookMyStay/
├── backend/
│   ├── node_modules/        # Dependencies
│   ├── .env                 # Environment variables
│   ├── .gitignore          # Git ignore rules
│   ├── package-lock.json   # Dependency lock file
│   ├── package.json        # Backend dependencies
│   ├── README.md           # Backend documentation
│   └── server.js           # Express server entry point
│
├── frontend/
│   ├── booking.html        # Booking page
│   ├── feedback.html       # User feedback page
│   ├── hotel.html          # Hotel details page
│   ├── index.html          # Landing page
│   ├── listings.html       # Hotels listing page
│   ├── login.html          # Login/Register page
│   ├── README.md           # Frontend documentation
│   └── style.css           # Global styles
│
└── README.md              # Main project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** (comes with Node.js)

### Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/BookMyStay.git
cd BookMyStay
```

#### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
MONGO_URI=mongodb://localhost:27017/bookmystay
# Or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/bookmystay

JWT_SECRET=your-super-secret-jwt-key-change-this
PORT=5000
TAX_PERCENTAGE=18
SERVICE_FEE_PERCENTAGE=5
```

Seed the database (if seed script exists):

```bash
npm run seed
```

Start the backend server:

```bash
npm start
# or for development with auto-reload
npm run dev
```

✅ Backend will run on `http://localhost:5000`

#### 3️⃣ Frontend Setup

```bash
cd frontend
```

Open `index.html` in your browser or use a local server:

**Option 1: Using Live Server (VS Code)**
- Install the Live Server extension
- Right-click on `index.html` → Open with Live Server

**Option 2: Using Python**
```bash
python -m http.server 3000
```

**Option 3: Using Node.js http-server**
```bash
npx http-server -p 3000
```

✅ Frontend will run on `http://localhost:3000`

---

## 📡 API Endpoints

### 🔐 Authentication
```
POST   /api/auth/register    # Register new user
POST   /api/auth/login       # Login user
GET    /api/auth/profile     # Get user profile (requires auth)
```

### 🏨 Hotels
```
GET    /api/hotels           # Get all hotels
GET    /api/hotels/:id       # Get hotel by ID
GET    /api/hotels/search    # Search hotels by city
```

### 📅 Bookings
```
POST   /api/bookings         # Create new booking (requires auth)
GET    /api/bookings         # Get user bookings (requires auth)
GET    /api/bookings/:id     # Get booking by ID (requires auth)
PUT    /api/bookings/:id     # Update booking (requires auth)
DELETE /api/bookings/:id     # Cancel booking (requires auth)
```

### 🎫 Offers
```
POST   /api/offers/validate  # Validate offer code
GET    /api/offers           # Get active offers
```

### 💬 Feedback
```
POST   /api/feedback         # Submit feedback (requires auth)
GET    /api/feedback         # Get all feedback (admin only)
```

---

## 🎯 Key Features Explained

### 1. User Authentication
- Secure registration and login with JWT tokens
- Password encryption using bcrypt
- Protected routes requiring authentication
- Session management

### 2. Hotel Browsing
- Browse all available hotels on listings page
- View detailed hotel information
- See pricing, amenities, and ratings
- Responsive image galleries

### 3. Booking System
- Select check-in and check-out dates
- Choose number of rooms and guests
- Enter guest details
- Apply promotional offer codes
- Real-time price calculation
- Booking confirmation

### 4. User Dashboard
- View all bookings in one place
- Check booking status
- Access booking details
- Manage reservations

### 5. Feedback System
- Submit reviews and feedback
- Rate your experience
- Help improve the platform

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Dynamic functionality
- **Fetch API** - HTTP requests

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **dotenv** - Environment configuration

---

## 🔒 Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Database
MONGO_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key

# Server
PORT=5000
NODE_ENV=development

# Billing
TAX_PERCENTAGE=18
SERVICE_FEE_PERCENTAGE=5
```

---

## 📝 API Request Examples

### Register a New User
```javascript
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "phone": "+1234567890"
}
```

### Login
```javascript
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

### Create Booking
```javascript
POST /api/bookings
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "hotelId": "hotel_id_here",
  "checkInDate": "2024-02-15",
  "checkOutDate": "2024-02-18",
  "numberOfRooms": 1,
  "numberOfGuests": 2,
  "guestDetails": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890"
  },
  "offerCode": "WELCOME20"
}
```

---

## 🎨 Page Structure

### 🏠 index.html
Landing page with hero section, featured hotels, and call-to-action

### 🔍 listings.html
Complete hotel listings with search and filter capabilities

### 🏨 hotel.html
Detailed hotel view with amenities, images, and booking button

### 📅 booking.html
Booking form with date selection, guest details, and payment

### 💬 feedback.html
User feedback and review submission form

### 🔐 login.html
User authentication (login/register)

---

## 🔮 Future Enhancements

- [ ] Payment gateway integration (Stripe/Razorpay)
- [ ] Email notifications for bookings
- [ ] User reviews and ratings system
- [ ] Hotel image galleries
- [ ] Interactive maps integration
- [ ] Admin dashboard for hotel management
- [ ] Multi-language support
- [ ] Real-time room availability
- [ ] Wishlist and favorites
- [ ] Advanced search filters
- [ ] Social media authentication
- [ ] Mobile app (React Native)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🐛 Bug Reports

If you discover any bugs, please create an issue on GitHub with:
- Bug description
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)

---


## 👨‍💻 Author

**Your Name**
- GitHub: [@Anvesha-Khandelwal](https://github.com/Anvesha-Khandelwal)
- LinkedIn: [Anvesha-Khandelwal](in/anvesha-khandelwal-115778320)

---

## 🙏 Acknowledgments

- MongoDB team for the excellent database solution
- Express.js community for the robust framework
- All contributors and testers

---

## ⭐ Show Your Support

If you find this project helpful, please give it a star! ⭐

---

**Built with ❤️ for travelers worldwide** | © 2024 BookMyStay. All rights reserved.
