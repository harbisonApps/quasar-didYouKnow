const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');
const port = process.env.PORT
require('./db/db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Seting up the static directory
app.use(express.static(path.join(__dirname, '../public')));
//bring in our user routes
const userRoutes = require('./routes/userRoutes');
const factRoutes = require('./routes/factRoutes')
app.use('/user', userRoutes);
app.use('/fact', factRoutes)

app.listen(port);
console.log('server runnging on port :' + port);