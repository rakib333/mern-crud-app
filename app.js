const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');
const path = require('path');


// security middleware import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');
const xss = require('xss-clean');


// mongoose
const mongoose = require('mongoose');
// managing front end routing
app.use(express.static('client/build'))

// security middleware implement
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(cors())
app.use(xss())


// implement bodyParser
app.use(bodyParser.json());



// rate limiter implement
const limiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 60 minutes
	max: 3000
})

app.use(limiter)


// create database connection
const uri = 'mongodb+srv://<username>:<password>@practiceprojects.qlhvgtp.mongodb.net/CRUD?retryWrites=true&w=majority';
const options = { user: 'crudapp', pass: '01830446750@Bist', autoIndex: true };
mongoose.set('strictQuery', false);
mongoose.connect(uri, options, (error) => {
	console.log(error)
	console.log('db connected successfully')
})


// managing backend api routing
app.use('/api/v1', router);

// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

module.exports = app;