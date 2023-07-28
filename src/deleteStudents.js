import React, { useState ,useEffect} from 'react'

const DeleteStudents = () => {
    
    const [drop, setDrop] = useState('')
    const handleDelete = (e) => {
        setDrop(e.target.value)
    }
   
     
    const submitHandler = (e) => {
        e.preventDefault()
        fetch('/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: drop
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("deleted Successfully", data.message)
            })
            .catch((err) => {
                console.log("Error Occured", err)
            })
        }
     
    return (
        <form onSubmit={submitHandler}>
            <div className='input-box1'>
                <lable>DELETE-STUDENTS</lable>
                <input
                    type='number'
                    maxLength={20}
                    onChange={handleDelete}
                    >
                </input>
                <button>DELETE</button>
            </div>
        </form>
    )
}

export default DeleteStudents
