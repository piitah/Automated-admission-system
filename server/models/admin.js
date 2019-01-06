const mongoose = require("mongoose")
const Schema = mongoose.Schema

const admin = new Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

let Admin = mongoose.model("Admin", admin)

module.exports = Admin