const mongoose = require('mongoose')
const Schema = mongoose.Schema
const faculty = require('../models/faculty')

const Department = new Schema({
    dept: String,
    cutoff: Number,
    faculty: String
})

let department = mongoose.model('department', Department)

module.exports = department