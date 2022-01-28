
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function ViewStudent() {

    const { id } = useParams();
    const url = `http://localhost:3000/students/${id}`
    const [student, setStudent] = useState(null);
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setStudent(res.data)
            })
    }, [url])
    console.log(student);
    if (student) {
        return (
            <div>
                <h1>{student.name}</h1>
                <h1>{student.age}</h1>
            </div>
        )
    }

    return (
        <div>

        </div>
    );
};

export default ViewStudent;
