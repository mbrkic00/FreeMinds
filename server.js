// ===== Environment variables =====
const dotenv = require('dotenv');
dotenv.config();
const db = process.env.MONGO_URI;

// ===== MongoDB setup =====
const mongoose = require('mongoose');
mongoose
   .connect(db)
   .then(() => console.log('MongoDb Connected...'))
   .catch(err => console.log(err))

// ===== Express app =====
const express = require("express");
const app = express();

// ===== Routes =====
app.use('/users', require('./routes/users'))

// ===== Production =====
const path = require('path')
if (process.env.NODE_ENV === 'production') {
   // Set static folder
   app.use(express.static('client/build'))

   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
   })
}

// ===== PORT listen =====
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))