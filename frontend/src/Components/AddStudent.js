import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import Axios from 'axios';
import React, { useState } from 'react';


const useStyle = makeStyles({
    container: {
        width: '30%',
        margin: '5% 0 0 35%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddStudent = () => {
    const [data, setData] = useState({
        name: "",
        age: ""
    });
    function submit(e) {
        e.preventDefault();
        Axios.post('http://localhost:3000/students/add', {
            name: data.name,
            age: data.age
        })
            .then(res => {
                console.log(res.data);
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }
    const classes = useStyle();
    return (<>
        <FormGroup className={classes.container}>
            <Typography variant='h5'>Add Student</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => handle(e)} id="name" value={data.name} placeholder='name' />
            </FormControl>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input onChange={(e) => handle(e)} id="age" value={data.age} placeholder='age' />
            </FormControl>
            <Button variant='contained' color='primary' onClick={(e) => submit(e)} >Add Students</Button>
        </FormGroup>
    </>);
};

export default AddStudent;
