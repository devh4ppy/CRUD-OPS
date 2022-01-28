const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')



const app = express()
app.use(cors())

mongoose.connect('mongodb://localhost:27017/studentdb').then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

app.use(express.json())

const studentRouter = require('./routes/students')
app.use('/students', studentRouter)

app.ser
app.listen(3000, () => {
    console.log('Server Started');
})


