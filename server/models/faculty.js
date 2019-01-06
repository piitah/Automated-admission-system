const mongoose = require('mongoose')
const Schema = mongoose.Schema
const department = require('../models/department')

const Faculty = new Schema({
    faculty: {
        type: String,
        require: true,
        unique: true
    }
    // dept: [{ type: Schema.Types.ObjectId, ref: 'department' }]
})

let faculty = mongoose.model('faculty', Faculty)

module.exports = faculty