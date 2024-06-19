import logo from '../assets/logo.avif'
import {GrLanguage} from "react-icons/gr"
import {FaXmark,FaBars} from "react-icons/fa6"
import { useState } from 'react';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
 
    const toggleMenu = ()=>{
     setIsMenuOpen(!isMenuOpen)
    }

    const navIteams =[
        {link: "Overview",path: "home"},
        {link: "Feature",path: "feature"},
        {link: "About",path: "about"},
        {link: "Pricing",path: "pricing"},
      ]

  return (
   <>
   
    {/* nav items */}
    <nav className="bg-white md:px-14 max-w-screen-2x1 mx-auto fixed top-0 right-0 left-0 border-b text-primary shadow-xl">
        <div className="text-lg container mx-auto flex justify-between iteam-center font-medium">

            {/* Nav img */}
            <div className="flex space-x-14 items-center">
                <a href="/" className="text-2xl font-semibold flex items-center text-primary space-x-3"><img src={logo} alt="" className="w-20 inline-block items-center "/><span>XYZ</span></a>
                {/* nav items */}
                <ul className="md:flex space-x-12 hidden  ">
              {navIteams.map(({ link, path }) => (
                <Link activeClass='active' spy={true} smooth={true} offset={true}  key={link} to={path} className="block hover:text-gray-400 cursor-pointer">
                  {link}
                </Link>
              ))}
            </ul>
            </div>
            {/* Language and btn */}
            <div className=" hidden md:flex iteam-center ">
            <a href="/" className=" space-x-6 hidden lg:flex items-center ">
              <span className="hover:text-gray-500 flex items-center">
                <GrLanguage /> Language</span>

              <button className="bg-secondary py-2 px-3 rounded-3xl transition-all duration-300  hover:text-white hover:bg-indigo-500 ">
                Sing up
              </button>
            </a>
          </div>
          {/* menu btn only display mobile */}
          <div className='md:hidden'>
              <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-400'>
                {
                  isMenuOpen ? (<FaXmark  className='w-6 h-6 text-primary  mt-6 me-3 '/>) : (<FaBars className='w-6 h-6 text-primary mt-6 me-3 '/>)
                }
              </button>
            </div>

        </div>
    </nav>
    
  {/* nav iteams in mobile */}
        <div className={`space-y-4 px-4 pt-5 pb-5 top-20 bg-secondary ${isMenuOpen ? "block fixed top-18 right-0 left-0" : "hidden"}`}>

      {navIteams.map(({ link, path }) => (
          <Link activeClass='active' spy={true} smooth={true} offset={-100}  key={link} to={path} className="block text-white hover:text-black text-xl"
          onClick={toggleMenu}>
            {link}
          </Link>
        ))}  
  </div>
  
   </>
)
}

export default Navbar