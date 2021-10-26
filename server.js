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

// ===== PORT listen =====
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))