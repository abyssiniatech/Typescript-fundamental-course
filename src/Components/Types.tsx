

const Type = () => {
   const name: string = "Surafel";
const age: number = 25;
const isActive: boolean = true;
const nothing: null = null;
const notDefined: undefined = undefined;
  return (
    <div>
       <p>{name}</p>
      <p>{age}</p>
      <p>{isActive ? "you are active " : "you are inactive"}</p>
      <p>{nothing}</p>
        <p>{notDefined}</p>
    </div>
  )
}

export default Type
