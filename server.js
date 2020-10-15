const express = require('express');
const dotenv = require('dotenv');
const db = require("./model/models/index");


//Route files
const auth = require('./routes/auth');

//load env vars
dotenv.config({ path: './config/config.env' });

db.sequelize.sync({ alter: true });


const app = express();
app.use(express.json()); // for parsing request body
app.use('/api/v1/auth', auth);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})