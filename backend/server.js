const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();

// for accessing req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/variables', require('./routes/variables-route'));
app.use('/api/templates', require('./routes/template-route'));

app.listen(port, () => console.log(`server started on port ${port}`));
