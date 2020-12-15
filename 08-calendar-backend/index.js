const express = require('express');
const dbConnection = require('./database/config');
const cors = require('cors');
const router = require('./routes/auth');
require('dotenv').config();

/*Create Express server*/
const app = express();

/* Data Base initialization */
dbConnection();

/* CORS */
app.use(cors());

//Public directory
app.use(express.static('public'));

/* Read and Parse of the body */
app.use(express.json());

/* Routes */
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

/* Listen Http requests */
app.listen(process.env.PORT, () => {
    console.log(`Server runing at port ${process.env.PORT}`);
});
