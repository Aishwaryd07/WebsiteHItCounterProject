const mongoose = require('mongoose');
const app = require('./app');

const port = 5000;

mongoose.connect('mongodb://localhost:27017/hitCounter', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });
