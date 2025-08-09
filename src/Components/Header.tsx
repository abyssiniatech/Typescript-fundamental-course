import img from "../assets/skill.png"
const Header = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 mb-8">
           <img className="w-[100px] bg-inherit rounded object-cover object-center" src={img} alt="hi"   />
           
           <ul className="flex gap-8 bg-pink-700 items-center justify-center rounded-4xl text-white bold font-bold hover:bg-pink-400"> 
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Contact us</a></li>
           </ul>
    </div>
  )
}

export default Header
