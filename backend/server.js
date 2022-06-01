const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();

// for logging body text to console
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/options', require('./routes/options-route'));

app.listen(port, () => console.log(`server started on port ${port}`));
