# mern-app

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Backend Setup
1. Navigate to the `server` directory:
   ```sh
   cd server
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
   The server will be running on `http://localhost:5000`.

### Frontend Setup
1. Navigate to the `client` directory:
   ```sh
   cd client
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```
   The React app will be running on `http://localhost:3000`.

### Directory Structure
```
mern-app/
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/
│   ├── routes/
│   │   └── sampleRoute.js
│   ├── server.js
│   └── package.json
└── README.md
```

### Sample API Route
- You can test the sample API route by navigating to `http://localhost:5000/api/sample` in your browser or using a tool like Postman.
