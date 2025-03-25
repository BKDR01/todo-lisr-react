import React, { useEffect, useState } from 'react'
import Button from '../button/button'
import axios from 'axios'

const Contend = () => {
  const apiStudent = import.meta.env.VITE_STUDENT_API 
    const [NewStudent , setNewStudent] = useState("")
    const [data , setData] = useState([""])
    
    const hundlesend = () => {
      e.preventDefault();

     axios.post(apiStudent, {
      task: NewStudent,
     })
     .then((response) => {
      setData([...data, response.data]); 
      setNewStudent("")
     })
     .catch((error) => console.error(error));

    }



    useEffect(() => {
      axios.get(apiStudent).then(res => {
        console.log(res.data);
        setData(res.data)
      })
    }, [])

  return (
    <>
      <div className='mx-auto max-w-[900px] mt-10'>
      <form onSubmit={hundlesend} className="flex gap-2">
        <input
          type="text"
          value={NewStudent}
          className="border p-2 rounded-md"
          placeholder="Add student"
          onChange={(e) => setNewStudent(e.target.value)}
        />
        <Button onClick={hundlesend}  text="Add student" className="bg-green-500" />
      </form>


        
           {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border border-gray-400 rounded-md justify-between p-2 mt-4"
            >
              <p>{item.task}</p>
              <div className="flex gap-4">
                <Button text="Delete" className="bg-red-500" />
                <Button text="Edit" className="bg-orange-500" />
              </div>
            </div>
          ))}
    
      </div>
    </>
  )
}

export default Contend
