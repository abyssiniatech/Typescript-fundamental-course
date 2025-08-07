
const Union = () => {
     const calculateArea=(radius:number):number =>{
        return(Math.PI *radius*radius).toFixed(2);
     }
     const area=calculateArea(5)
     
  return (
    <div>
      <p>Hello union</p>
      {area}
    </div>
  )
}

export default Union
