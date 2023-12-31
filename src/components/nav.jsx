import { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [openNavigation, setOpenNaigation] = useState('invisible')

  const openNav = () => {
    if(openNavigation === 'invisible'){
      setOpenNaigation('absolute')
    }else
    {
      setOpenNaigation('invisible')
    }
  }

  return (
    <nav className="fixed w-full h-[9vh] lg:h-[11vh]">
      <div className="flex items-center justify-between py-6 w-[80%] mx-auto">
        <h3 className="font-extrabold text-2xl text-white font-[Gabriola]">Portfolio</h3>
        <div className="flex items-center gap-3">
          <Link className="bg-orange-300 lg:bg-black p-3 px-4 text-white rounded-lg lg:hover:text-orange-300 ">Download CV</Link>
          <button className="text-white" onClick={openNav}>{openNavigation === 'invisible' ? <FaBars size={23} /> : <FaTimes size={23}/>}</button>
        </div>
      </div>
      <ul className={`${openNavigation} font-[Gabriola] bg-white -mt-4 right-5 lg:right-44 shadow-lg rounded-lg`}>
            <li className="p-3  lg:text-black hover:text-orange-300 font-bold"><Link to='/'>Home</Link></li>
            <li className="p-3  lg:text-black hover:text-orange-300 font-bold"><Link to='/about'>About</Link></li>
            <li className="p-3  lg:text-black hover:text-orange-300 font-bold"><Link to='/services'>Services</Link></li>
            <li className="p-3  lg:text-black hover:text-orange-300 font-bold"><Link to='/portfolio'>Portfolio</Link></li>
            <li className="p-3  lg:text-black hover:text-orange-300 font-bold"><Link to='/contact'>Contact</Link></li>
          </ul>
    </nav>
  )
}

export default Nav