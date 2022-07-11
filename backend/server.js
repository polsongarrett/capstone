const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();

// for accessing req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// competition variable options routes
app.use('/api/competitions', require('./routes/competitions-route'));
app.use('/api/locales', require('./routes/locales-route'));
app.use('/api/prizes', require('./routes/prizes-route'));
app.use('/api/twists', require('./routes/twists-route'));

// crime variable options routes

// templates route
app.use('/api/templates', require('./routes/template-route'));

app.listen(port, () => console.log(`server started on port ${port}`));
