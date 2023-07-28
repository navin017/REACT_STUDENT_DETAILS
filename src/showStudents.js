import { useState, useEffect } from "react"
import React from 'react'

const ShowStudents = () => {
   const [students, setStudents] = useState([]);
  
  useEffect(() => {
    fetch("/get-students",{
      mode: 'no-cors'
    })
    .then((response)=>response.json())
      .then(({ data }) => {
        setStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);
 
  return (
    <div>
      {students.map((details,index)=>{
        return(
          <div key={index}>
          <ul>
            <li>
              {details.first_name}
            </li>
            <li>
              {details.last_name}
            </li>
            <li>
              {details.email_id}
            </li>
            <li>
              {details.id}
            </li>
            <li>
              {details.mark ? details.mark.english:"NULL"}
            </li>
            <li>
              {details.mark ? details.mark.tamil:"NULL"}
            </li>
            <li>
              {details.mark ? details.mark.maths:"NULL"}
            </li>

          </ul>
          </div>
        )
      })}
    </div>
  )
}

export default ShowStudents
