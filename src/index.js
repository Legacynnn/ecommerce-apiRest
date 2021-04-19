const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
const app = express()

require('../db/mongoose')
require('dotenv').config

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
    console.log('server is running')
})