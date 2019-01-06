const express = require('express')
const router = express.Router();
const faculty = require('../models/faculty')

router.post('/', async (req, res) => {
    try {
        const Faculty = req.body.faculty.toUpperCase()

        const faculti = new faculty({
            faculty: Faculty
        })

        console.log(Faculty)

        faculti.save(function (err, faculties) {
            if (err) {
                res.status(500).send({
                    error: 'unable to save' + err
                })
            } else {
                res.send(faculties)
            }
        })

    } catch (error) {
        res.status(500).send({
            error: `An error occured trying to save faculty ${error}`
        })
    }
})

module.exports = router