const express = require("express")
const router = express.Router()
const Admin = require("../models/admin")
const jwt = require("jsonwebtoken")

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, 123456, {
        expiresIn: ONE_WEEK
    })
}

router.post("/", async (req, res) => {
    const adminDetail = new Admin({
        user: "group3",
        password: 123456
    })

    adminDetail.save(function (err, saved) {
        if (err) {
            res.send({
                error: "error occured trying to save detail"
            })
        } else {
            res
        }
    })
})