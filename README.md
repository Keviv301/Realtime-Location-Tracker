# 📍 Real-Time Location Tracker

A real-time location tracking web application built using Node.js, Express, Socket.IO, and Leaflet. The application allows multiple users to share and view live locations on an interactive map.

##  Live Demo

🌐 Live Website:
https://realtime-location-tracker-ml61.onrender.com/

## ✨ Features

- Real-time location tracking
- Live map updates using Socket.IO
- Interactive map powered by Leaflet
- Multiple users can connect simultaneously
- Automatic marker updates when users move
- Removes markers when users disconnect
- Browser Geolocation API support

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- Leaflet.js

### Backend
- Node.js
- Express.js
- Socket.IO

### Deployment
- Render

## 📂 Project Structure

```text
REALTIME_TRACKER
│
├── public
│   ├── css
│   │   └── style.css
│   └── js
│       └── script.js
│
├── views
│   └── index.ejs
│
├── app.js
├── package.json
└── package-lock.json
```

## 📸 Screenshots

### Home Page

Add your project screenshot here.

Example:

```md
![Project Screenshot](screenshots/home.png)
```

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Realtime-Location-Tracker.git
```

### Navigate to Project

```bash
cd Realtime-Location-Tracker
```

### Install Dependencies

```bash
npm install
```

### Start Server

```bash
node app.js
```

or

```bash
npm start
```

### Open Browser

```text
http://localhost:3000
```

## 🔄 How It Works

1. User opens the application.
2. Browser requests location permission.
3. User location is sent to the server using Socket.IO.
4. Server broadcasts the location to all connected users.
5. Markers are updated in real-time on the map.
6. When a user disconnects, their marker is removed.

## 👨‍💻 Author

**Vivek Kumar**

GitHub:
https://github.com/YOUR_USERNAME

---

⭐ If you like this project, don't forget to star the repository.
