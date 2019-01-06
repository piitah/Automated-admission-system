const express = require('express')
const router = express.Router();
const Department = require('../models/department')
const Faculty = require('../models/faculty')

router.post('/', async (req, res) => {
    try {
        const dept = req.body.dept.toUpperCase()
        const cutoff = req.body.cutoff
        const facult = req.body.faculty

        const department = new Department({
            dept: dept,
            cutoff: cutoff,
            faculty: facult
        })

        console.log(cutoff)

        department.save(function (err, departments) {
            if (err) {
                res.status(500).send({
                    error: 'unable to save' + err
                })
            } else {
                res.send(departments)
            }
        })

    } catch (error) {
        res.status(500).send({
            error: `An error occured trying to save department ${error}`
        })
    }
})
router.get('/', async (req, res) => {
    const faculty = await Faculty.find({});
    res.send(faculty)
    console.log(faculty)
})
module.exports = router