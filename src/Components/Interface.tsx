interface user{
    name:string;
    age:number;
    addrese:string;
}
const users:user={
    name:"surafel mengist",
    age:26,
    addrese:"Addis Ababa",
}

const Interface = () => {
  return (
    <div>
            <p>{users.name}</p>
            <p>{users.age}</p>
            <p>{users.addrese}</p>
    </div>
  )
}

export default Interface
