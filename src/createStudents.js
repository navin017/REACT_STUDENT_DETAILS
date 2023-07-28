import React, { useState,useEffect} from 'react'
import '../src/create.css'

const CreateStudents = () => {
  const [input, setInput] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [email, setEmail] = useState("");
  const [tamil, setTamil] = useState("");
  const [english, setEnglish] = useState("");
  const [maths, setMaths] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleInputTwo = (e) => {
    setInputTwo(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleTamil = (e) => {
    setTamil(e.target.value)
  }
  const handleEnglish = (e) => {
    setEnglish(e.target.value)
  }
  const handleMaths = (e) => {
    setMaths(e.target.value)
  }


  const submitHandler = (e) => {
    e.preventDefault()
    fetch('/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fname: input,
        lname: inputTwo,
        email: email,
        marks: {
          tamil: tamil,
          english: english,
          maths: maths
        }
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("user Name is Stored Successfully", data.message)
      })
      .catch((err) => {
        console.log("Error Occured", err)
      })
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div className='total'>
          <div className='input-box1'>
            <lable>FIRST NAME : </lable>
            <input
              type='text'
              maxLength={20}
              onChange={handleChange}>
            </input>
          </div>
          <div className='input-box2'>
            <lable>LAST NAME : </lable>
            <input
              className='last-name'
              type='text'
              maxLength={20}
              onChange={handleInputTwo}>
            </input>
          </div>
          <div className='input-box2'>
            <lable>EMAIL-ID : </lable>
            <input
              className='last-name'
              type='text'
              maxLength={20}
              onChange={handleEmail}>
            </input>
          </div>
          <div className='Marks'>
            <h3 className='mark-head'>Marks</h3>
            <lable>Tamil : </lable>
            <input
              className='mark'
              type='number'
              onChange={handleTamil}
            ></input>
            <lable>English : </lable>
            <input
              className='mark'
              type='number'
              onChange={handleEnglish}
            ></input>
            <lable>Maths : </lable>
            <input
              className='mark'
              type='number'
              onChange={handleMaths}
            ></input>
          </div>
          <button type='submit'>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default CreateStudents;
