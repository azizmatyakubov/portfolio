import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo1.png'

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="" srcSet="Logo Image" style={{ width: '50px' }} />
      </div>

      {/* menu  */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger menu */}
      <div className="md:hidden">
        <FaBars />
      </div>

      {/* Mobile menu  */}
      <ul className="hidden">
        <li>
          <FaTimes />
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Contact</li>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden"></div>
    </div>
  )
}

export default Navbar
