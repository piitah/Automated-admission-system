const express = require('express')
const router = express.Router();
const Student = require('../models/student')

router.get('/', async (req, res) => {
    const Students = await Student.find({});
    res.send(Students)
    console.log(Students)
})

module.exports = router