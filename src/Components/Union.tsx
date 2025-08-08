

import { useState } from "react";
const Union = () => {
  const [user,setuser]=useState("surafel");
  const [count,setCount]=useState(0)
  const handleName=()=>{
    setuser("Abel")
    setCount(count+1)
  }


  return (
    <div className="bg-teal-50 text-center">
           <p className="bg-pink-700 text-white w-40  p-8 rounded-[50%] m-auto">{user} || <span className="bg-teal-400 p-2 rounded text-white">{count}</span></p>
           <button onClick={handleName} className="bg-blue-700  hover:bg-blue-500 rounded text-white px-4 py-2 text-2xl ">changeName</button>
    </div>
  )
}

export default Union
