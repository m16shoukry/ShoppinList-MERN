const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-Parser')
const app = express()
const items = require('./routes/api/items')


app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected <3'))
    .catch(err => console.log(err));

app.use('/api/items', items)



const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))


