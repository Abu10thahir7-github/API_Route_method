const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const orderRoutes =require('./Route/orderRoutes')


mongoose.connect("mongodb://localhost:27017/login-sign")
.then(console.log("DB connected"))
.catch(err =>console.log(err))


app.use('/api/order', orderRoutes)

app.listen(6000, () => {
    console.log('Server is running on port 3000');
})