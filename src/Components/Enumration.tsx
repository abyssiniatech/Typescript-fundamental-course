enum Directions{
    Up,
    Down,
    Left,
    Right,
}
const move : Directions=Directions.Left
console.log(move)

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let myRole: Role = Role.Admin;
console.log(myRole); // "ADMIN"

const Enumration = () => {
  return (
    <div>
       <p>Hello world</p>
    </div>
  )
}

export default Enumration
