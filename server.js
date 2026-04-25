const express = require('express');
const app = express();

const greeting = process.env.GREETING || 'Hello from your deployed app!';

app.get('/api/message', (req, res) => {
  res.json({ message: greeting });
});

app.get('/', (req, res) => {
  res.send('Go to /api/message');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});