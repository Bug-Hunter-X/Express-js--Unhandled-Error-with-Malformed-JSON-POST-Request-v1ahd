const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  if (!req.body || !req.body.name) {
    return res.status(400).json({ error: 'Missing or invalid user name' });
  }
  const user = req.body;
  console.log(user.name);
  res.status(201).json({ message: 'User created', user });
});
app.listen(3000, () => console.log('Server listening on port 3000'));