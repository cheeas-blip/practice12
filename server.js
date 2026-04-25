const express = require('express');
const app = express();

const greeting = process.env.GREETING || 'Hello from your deployed app!';

app.get('/api/message', (req, res) => {
  res.json({ message: greeting });
});

app.listen(3000, () => {
  console.log('Server running');
});