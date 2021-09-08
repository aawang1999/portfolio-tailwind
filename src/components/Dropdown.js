import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? "grid grid-rows-2 text-center items-center bg-blue-500" : "hidden"} onClick={toggle}>
      <Link className="p-4 text-white" to="/about">About</Link>
      <Link className="p-4 text-white" to="/projects">Projects</Link>
    </div>
  )
}

export default Dropdown
