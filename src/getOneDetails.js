import React, { useState } from 'react'

const GetOneDetails = () => {
    const [student, setStudent] = useState([]);
    const handleGetOne = (e) => {
        setStudent(e.target.value)
    }
   
  
    const submitHandler = (e) => {
        e.preventDefault()
        fetch('/get-one', {
            // method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: student
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched Successfully", data.message)
            })
            .catch((err) => {
                console.log("Error Occured", err)
            })
        }
    return (
        <form onSubmit={submitHandler}>
            <div className='input-box1'>
                <lable>ENTER STUDENT ID</lable>
                <input
                    type='number'
                    maxLength={20}
                    onChange={handleGetOne}
                    >
                </input>
                <button>DELETE</button>
            </div>
        </form>
    )
}

export default GetOneDetails
