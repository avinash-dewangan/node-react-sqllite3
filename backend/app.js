const express = require('express');
const databaseMiddleware = require('./middleware/dbMiddleware');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(express.json());
app.use(databaseMiddleware);

app.use('/api', userRoutes);
app.use('/api', orderRoutes);

module.exports = app;
