const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const nodemon = require('nodemon')
const mongoose = require('mongoose')


const faculty = require('../routes/faculty')
const dept = require('../routes/dept')
const student = require('../routes/student')
const admission = require('../routes/admission')

// init app
const app = express()

// uses various package
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

//  set routers
app.use('/faculty', faculty)
app.use('/dept', dept)
app.use('/student', student)
app.use('/admission', admission)

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/lautechAdmission';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('connected to mogndb')
});



app.listen(process.env.PORT || 8182, function () {
  console.log('linstening to port 8182');
})