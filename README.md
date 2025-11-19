# 🛒 Smart Deals – Online Bidding Marketplace

## 📌 Project Overview

Smart Deals is a modern React-based bidding marketplace where authenticated users can list products for sale, and other users can place bids in real-time. The product owner can choose to sell at the **highest bid price**.  
The platform includes secure authentication, full CRUD operations, real-time bidding, and a clean, responsive UI.

---

## Project Image

<img src="https://i.ibb.co.com/23y5QwqV/rsz-screenshot-from-2025-11-19-13-52-17.jpg" width="100%" height="350" />

---

## 🚀 Main Features

### 🧑‍💻 User Authentication

- Firebase **Email/Password** login and registration
- **Google Sign-In** support
- Protected routes for authenticated users

### 📦 Product Listing (CRUD)

- Authenticated users can **create**, **update**, and **delete** product listings
- Listings include product details, base price, and images
- Dashboard for managing owned products

### 💰 Bidding System

- Users can place **bids** on listed products
- Product owners can view all bids
- Sell products to the **highest bidder**
- Real-time bid updates for a smooth experience

### 📄 Product Insights

- Detailed product pages with bidding history
- User-specific pages for bidding and product management

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Auth (Email/Password & Google)

---

## 📦 NPM Packages Used

client:

- tailwindcss
- daisyui
- react-router
- firebase
- react-icons
- axios
- SweetAlert2

server:
- cors
- express
- firebase-admin
- jsonwebtoken
- mongodb
- jsonwebtoken (if JWT used)
- dotenv

---

## How to Run Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/Nur-Nayeem/smart-deals.git

   ```

2. Install dependencies:

   ```bash
   cd smart-deals/client && npm install

   cd smart-deals/server && npm install
   ```

3. Add .env in client and server folder with Firebase Admin credentials and MongoDB URI.

client (.env):

```bash
  VITE_apiKey=your-firebase-api-key
  VITE_authDomain=your-firebase-authDomain
  VITE_projectId=your-firebase-projectId
  VITE_storageBucket=your-firebase-storageBucket
  VITE_messagingSenderId=your-firebase-messagingSenderId
  VITE_appId=your-firebase-appId
```

Server (.env):

```bash
   PORT=your-port
   MONGODB_URI=your-mongodb-uri
   SECRET=your-secret (if JWT used)
   FIREBASE_SERVICE_KEY= (base64 encoded JSON)
```

4. Start server:
   ```bash
   node index.js
   ```
5. Start client:

   ```bash
   npm run dev
   ```

---

### **🌍 Live Website:** [Smart Deals Website](https://smart-deals-b3ad6.web.app/)

### **💻 GitHub Repo:** [Github Repo](https://github.com/Nur-Nayeem/smart-deals)
