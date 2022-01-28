const express = require('express')
const router = express.Router()
const Student = require('../models/Student');

//Add Student
router.post('/add', async (req, res) => {
    try {
        //Create User
        const newstudent = new Student({
            name: req.body.name,
            age: req.body.age,
        });
        //Save and Respond
        const student = await newstudent.save();
        res.status(200).json(student);
    } catch (error) {
        console.log(error);
    }
});
//Get all Students
router.get('/all', async (req, res) => {
    try {
        const students = await Student.find()
        res.json({ success: true, data: students })
    } catch (error) {
        return res.status(500).json({ success: false });
    }
});
//Get a Student
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)
        res.json(student)
    } catch (error) {
        return res.status(500).json(error);
    }
});
//Remove a Student 
router.delete('/delete/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'Student deleted successully!' })
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = router




