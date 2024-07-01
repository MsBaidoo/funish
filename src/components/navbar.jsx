import { Link } from "react-router-dom";
import K from "../constants"


// k.navlinks giving us the power to call the navlinks
// Link is representing (a href) in javascript and the to take us to the path
// y row and  x is column  padding y
const Navbar = () => {
  return (
    <div className="flex justify-between px-56 py-10 fixed w-full left-0 top-0 text-white">
      <span className="text-black font-bold uppercase">Jewelry Hub</span>
      <div className="flex gap-x-10">
       { K.NAVLINKS.map(
          (item,index) => {
           return <Link key={index} to={item.path}>{item.name}</Link>
          }
        )
       }
      </div>

    </div>
  )
}

export default Navbar;