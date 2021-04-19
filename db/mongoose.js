const mongoose = require('mongoose')
require('dotenv').config

mongoose.connect('mongodb://localhost:27018/ecommerce-mongo', {
    "auth": { "authSource": "admin" },
    "user": "root",
    "pass": "pass",
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log('Database has been connected'))