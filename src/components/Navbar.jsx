import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo1.png'
import { Link } from 'react-scroll'
import NavItem from './NavItem'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="" srcSet="Logo Image" style={{ width: '50px' }} />
      </div>

      {/* menu  */}

      <ul className="hidden md:flex">
        <li>
          <NavItem text="Home" />
        </li>
        <li>
          <NavItem text="About" />
        </li>
        <li>
          <NavItem text="Projects" />
        </li>
        <li>Experience</li>
        <li>
          <NavItem text="Skills" />
        </li>
        <li>
          <NavItem text="Contact" />
        </li>
      </ul>

      {/* Hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu  */}
      <ul
        className={
          nav
            ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            : 'hidden'
        }
      >
        <li className="py-6 text-4xl">
          <NavItem handleClick={handleClick} text="Home" />
        </li>
        <li className="py-6 text-4xl">
          <NavItem handleClick={handleClick} text="About" />
        </li>
        <li className="py-6 text-4xl">
          <NavItem handleClick={handleClick} text="Projects" />
        </li>
        <li className="py-6 text-4xl">Experience</li>
        <li className="py-6 text-4xl">
          <NavItem handleClick={handleClick} text="Skills" />
        </li>
        <li className="py-6 text-4xl">
          <NavItem handleClick={handleClick} text="Contact" />
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="http://"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="http://"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="http://"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="http://"
            >
              CV
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
