const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user details ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

//Problem: Incorrect handling of non-numeric user IDs
//The code assumes that the user ID is always a number and does not handle cases where the ID might be a string or other data type.  This could lead to unexpected errors or vulnerabilities.