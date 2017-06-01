const express = require('express');
const app = express();
app.get('/track', (req, res) => {
  res.send();
});
app.listen(3000);
