require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
console.log('Routes object:', routes);
const { connectToSQL } = require('./config/sqlConfig');

const app = express();

const PORT = process.env.PORT || 5173; // Changed default port to 5176

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

connectToSQL()
  .then(() => console.log('Connected to SQL database'))
  .catch(err => console.error('Could not connect to SQL database', err));

app.use('/api', routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));