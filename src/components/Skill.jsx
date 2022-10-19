import React from 'react'

const Skill = ({ icon, text }) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img className="w-20 mx-auto" src={icon} alt="HTML icon" />
      <p className="my-4">{text}</p>
    </div>
  )
}

export default Skill
