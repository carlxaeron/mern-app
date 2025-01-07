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

### Admin Setup
1. Navigate to the `admin` directory:
   ```sh
   cd admin
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Start the admin React app:
   ```sh
   npm start
   ```
   The admin React app will be running on `http://localhost:3001`.

### Directory Structure
```
mern-app/
├── admin/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── homeRoutes.js
│   │   ├── postRoutes.js
│   │   └── sampleRoute.js
│   ├── server.js
│   └── package.json
└── README.md
```

### Sample API Route
- You can test the sample API route by navigating to `http://localhost:5000/api/sample` in your browser or using a tool like Postman.

### CMS Client Instructions
- To create a new post, fill out the form and click "Create".
- To edit a post, click the "Edit" button next to the post, update the form, and click "Update".
- To delete a post, click the "Delete" button next to the post.

### Updated API Routes
- `POST /api/posts`: Create a new post.
- `GET /api/posts`: Retrieve all posts.
- `PUT /api/posts/:id`: Update a post by ID.
- `DELETE /api/posts/:id`: Delete a post by ID.

### Updating the Home Page
- The home page can be updated through the server side by modifying the `homeRoutes.js` file in the `server/routes` directory.
- The `homeRoutes.js` file sends HTML content including the header, footer, and posts from the database.
- To update the header, footer, or the content of the home page, edit the HTML content in the `homeRoutes.js` file.

### Using Bootstrap in the Client Side
- Bootstrap is used in the client side for styling.
- The Bootstrap CSS file is imported in the `index.js` file in the `client/src` directory.
- You can use Bootstrap classes in your React components to style them.
