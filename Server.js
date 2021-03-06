const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routeUrl = require('./routes/auth_route')
const cors = require('cors');



dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, ()=>{
    console.log('connected to database');
})

app.use(express.json());
app.use(cors());
app.use('/app', routeUrl)


app.listen(3000, () => 
    console.log('Server is running on port 3000'))
