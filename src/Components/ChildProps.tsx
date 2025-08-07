type PropTypes={
    name:string,
    age:number,
    isMarrid:boolean,
}
const ChildProps = (props:PropTypes) => {
  return (
    <div>
         <p>{props.name}</p>
         <p>{props.age}</p>
         <p>{props.isMarrid ? "you are marrid": "you are single"}</p>
    </div>
  )
}

export default ChildProps
