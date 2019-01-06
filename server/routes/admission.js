const express = require('express')
const router = express.Router();
const Student = require('../models/student')
const Department = require('../models/department')

router.get('/:studentUtme', async (req, res) => {
    try {
        const utme = req.params.studentUtme
        let departments = await Department.find({});
        let studentUtme = await Student.where({ UTME: utme }).findOne(function (err, studentUtme) {
            if (err) {
                return res.send({
                    message: 'user does not exist'
                })
            }
            if (studentUtme) {
                try {
                    let arrayDept = []
                    for (let index = 0; index < departments.length; index++) {
                        if (departments[index].dept === studentUtme.DEPT) {
                            if (studentUtme.SCORE >= departments[index].cutoff) {
                                res.send({
                                    dept: departments[index],
                                    student: studentUtme
                                })
                            } else if (studentUtme.SCORE < departments[index].cutoff && studentUtme.SCORE >= 30) {
                                let newDept = departments.forEach(function (dept) {
                                    if (studentUtme.SCORE <= dept.cutoff) {
                                        arrayDept.push(dept)
                                    }
                                })
                                let newDepartment = arrayDept[Math.floor(Math.random() * arrayDept.length)]
                                console.log(newDepartment)
                                res.send({
                                    dept: newDepartment,
                                    student: studentUtme
                                })
                            } else {
                                res.send({
                                    student: studentUtme
                                })
                            }
                        }
                    }
                } catch (error) {
                    res.status(400).send({
                        error: "error has occured"
                    })
                }
            } else {
                res.send({
                    error: "INVALID UTME NUMBER"
                })
            }
        })
    } catch (error) {
    }
})

router.post('/', async (req, res) => {
    const utme = req.body.utme
    try {
        let Utme = await Student.where({ UTME: utme }).findOne(function (err, utme) {
            if (err) {
                return res.send({
                    invalid: false
                })
            }
            if (utme) {
                return res.send({
                    valid: true
                })
            }
        })
    } catch (error) {
        res.send({
            invalid: false
        })
    }
})

module.exports = router