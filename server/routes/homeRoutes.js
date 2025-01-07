const express = require('express');
const router = express.Router();
const { getDb } = require('../db');

router.get('/', async (req, res) => {
  const db = getDb();
  const posts = await db.collection('posts').find().toArray();

  const header = '<header><h1>Welcome to the Home Page</h1></header>';
  const footer = '<footer><p>&copy; 2023 MERN App</p></footer>';
  const postList = posts.map(post => `<div><h3>${post.title}</h3><p>${post.content}</p></div>`).join('');

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home Page</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    </head>
    <body>
      ${header}
      <div class="container">
        ${postList}
      </div>
      ${footer}
    </body>
    </html>
  `;

  res.send(htmlContent);
});

module.exports = router;
