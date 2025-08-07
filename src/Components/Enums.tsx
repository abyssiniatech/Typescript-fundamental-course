import React from 'react'

const Enums = () => {
    enum Darkmode{
        light="LIGHT",
        dark:"DARK",
        system:"SYSTEM",
    }
    const them:Darkmode =Darkmode.DARK;
    if(them ===Darkmode.light){
        console.log("light mode")
    }
  return (
    <div>
      
    </div>
  )
}

export default Enums
