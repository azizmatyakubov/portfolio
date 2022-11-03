import React from 'react'
import { Link } from 'react-scroll'

const NavItem = ({ text, handleClick }) => {
  return (
    <Link
      onClick={handleClick}
      to={text}
      smooth={true}
      offset={50}
      duration={500}
    >
      {text}
    </Link>
  )
}

export default NavItem
