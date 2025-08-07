
const Array = () => {
    const numbers :number[]=[1,2,3,4,5,];
    const frainds:string[]=["abel",'Natan',"aster",'yared'];
return(
    <div className="grid grid-cols-3 rounded gap-4 bg-teal-100 ">

           {numbers.map((num:number)=>{
            return (<p>{num}</p>)
           })}
           {frainds.map((nums:string)=>{
            return(<p>{nums}</p>)
           })}
    </div>
)
}

export default Array
