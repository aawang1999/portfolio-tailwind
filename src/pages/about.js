import React, { useState } from 'react'

const About = () => {
  const [profileFlipped, setProfileFlipped] = useState(false)
  const [skillsFlipped, setSkillsFlipped] = useState(false)
  const [experienceFlipped, setExperienceFlipped] = useState(false)

  return (
    <div className="bg-blue-300 pb-1">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl uppercase font-black text-white mt-20">
          About
        </h1>
      </div>
      <div className="m-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        <div className="about-card" onClick={() => setProfileFlipped(!profileFlipped)}>
          <div className={`${profileFlipped ? "about-card-inner is-flipped  rounded-xl shadow-lg" : "about-card-inner rounded-xl shadow-lg"}`}>
            <div className="about-card-face about-card-face-front">
              <h2 className="text-2xl font-bold text-center text-black">Profile</h2>
            </div>
            <div className="about-card-face about-card-face-back text-black">
              <div className="about-text-center">
                <p><strong>Los Altos, CA</strong></p>
              </div>
              <div className="about-text-center">
                <p><strong>(650) 305-8034</strong></p>
              </div>
              <div className="about-text-center">
                <p><strong>aawang99@stanford.edu</strong></p>
              </div>
              <div className="about-text-center">
                <p><strong>Stanford University</strong></p>
                <p>BS Computer Science</p>
                <p>GPA 3.45</p>
                <p>09/2018 - Present</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-card" onClick={() => setSkillsFlipped(!skillsFlipped)}>
          <div className={`${skillsFlipped ? "about-card-inner is-flipped  rounded-xl shadow-lg" : "about-card-inner rounded-xl shadow-lg"}`}>
            <div className="about-card-face about-card-face-front">
              <h2 className="text-2xl font-bold text-center text-black">Skills</h2>
            </div>
            <div className="about-card-face about-card-face-back text-black">
              <div className="skills-title">
                <p><strong>HTML / CSS / JS</strong></p>
                <p>80%</p>
              </div>
              <div className="skills-bar-container">
                <div className="skills-bar bar-80 bg-blue-500"></div>
              </div>
              <div className="skills-title">
                <p><strong>C++, Java, Python</strong></p>
                <p>60%</p>
              </div>
              <div className="skills-bar-container">
                <div className="skills-bar bar-60 bg-blue-500"></div>
              </div>
              <div className="skills-title">
                <p><strong>React, Handlebars</strong></p>
                <p>60%</p>
              </div>
              <div className="skills-bar-container">
                <div className="skills-bar bar-60 bg-blue-500"></div>
              </div>
              <div className="skills-title">
                <p><strong>Mongo, Express, Node.js</strong></p>
                <p>40%</p>
              </div>
              <div className="skills-bar-container">
                <div className="skills-bar bar-40 bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-card" onClick={() => setExperienceFlipped(!experienceFlipped)}>
          <div className={`${experienceFlipped ? "about-card-inner is-flipped  rounded-xl shadow-lg" : "about-card-inner rounded-xl shadow-lg"}`}>
            <div className="about-card-face about-card-face-front">
              <h2 className="text-2xl font-bold text-center text-black">Experience</h2>
            </div>
            <div className="about-card-face about-card-face-back text-black">
              <div className="about-text-center">
                <p><strong>Engineering Intern @ Sunway Education Group</strong></p>
                <p>12/2020 - 04/2021</p>
                <p>Kuala Lumpur, Malaysia</p>
              </div>
              <div className="about-text-center">
                <p><strong>IoT Intern @ YPCloud, Inc.</strong></p>
                <p>06/2020 - 09/2020</p>
                <p>Taipei, Taiwan</p>
              </div>
              <div className="about-text-center">
                <p><strong>YouTuber & Webpage Developer</strong></p>
                <p>09/2017 - Present</p>
                <p>Palo Alto, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About