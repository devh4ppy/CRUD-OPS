import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Link } from 'react-router-dom';
;


const useStyle = makeStyles({
    table: {
        width: '50%',
        margin: '5% 0 0 25%',
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

const AllStudents = () => {
    const [data, setData] = useState([]);
    const classes = useStyle();

    const deleteUser = async (id) => {
        await Axios.delete(`http://localhost:3000/students/delete/${id}`)
        addUser();
    }

    const addUser = async () => {
        await Axios.get('http://localhost:3000/students/all')
            .then(res => {
                console.log(res.data);
                if (res.data.success)
                    setData(res.data.data);
                else
                    console.log("requset Fail");
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        addUser();
    }, [])
    return (
        <div>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>View/Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map(studentinfo => (
                            <TableRow className={classes.row} key={studentinfo._id}>
                                <TableCell>{studentinfo.name}</TableCell>
                                <TableCell>{studentinfo.age}</TableCell>
                                <TableCell>
                                    <Button variant='contained' color='primary' style={{ marginRight: 10 }} component={Link} to={`/view/${studentinfo._id}`}>View</Button>
                                    <Button variant='contained' color='secondary' onClick={() => deleteUser(studentinfo._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default AllStudents;
