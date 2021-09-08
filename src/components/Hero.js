import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="bg-blue-300 h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-9xl md:text-8xl sm:text-7xl text-6xl font-black mb-7 text-white">
        TRISTAN WANG
      </h1>
      <h4 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-normal mb-14 text-white">Software Engineer, Web Developer</h4>
      <div className="flex justify-center">
        <a href="https://github.com/aawang1999" target="_blank" rel="noopener noreferrer">
          <FaGithub className="mx-8 text-5xl text-white hover:text-blue-500" />
        </a>
        <a href="https://www.linkedin.com/in/tristan-wang-b86676154/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="mx-8 text-5xl text-white hover:text-blue-500" />
        </a>
      </div>
    </div>
  )
}

export default Hero