import { useState, useEffect} from 'react'
import React from 'react'


const Category =() =>{
    const [option,setOption] = useState([])
    useEffect(() => {
        fetch("/category")
        .then(response=>response.json())
        .then(({ datas }) => {
            setOption(datas);
            console.log(option,",,,,,,,,,,,")
          })
          .catch((error) => {
            console.log(error);
          });
        }, []);
  return (
    <div>
       {option?.map((splitUp)=>{
        return(
          <div>
          <ul>
            <li>
              {splitUp.first_name}
            </li>
          </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Category
