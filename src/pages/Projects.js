import React, { useState } from 'react'
import { projectData } from '../data/projectData'

const Projects = () => {
  const [search, setSearch] = useState('')

  const searchText = (e) => {
    setSearch(e.target.value)
  }

  let dataSearch = projectData.filter(item => {
    return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(search.toString().toLowerCase()))
  })

  return (
    <div className="bg-blue-300 pb-1">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl uppercase font-black text-white mt-20">
          Projects
        </h1>
      </div>
      <div className="m-20">
        <div className="bg-white shadow-lg rounded-xl p-4 flex">
          <span className="w-auto flex justify-end items-center text-gray-500 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </span>
          <input
            className="w-full rounded p-2 outline-none"
            type="text"
            placeholder="Search"
            value={search}
            onChange={searchText.bind(this)}
          />
        </div>
      </div>
      <div className="m-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {dataSearch.map((item) => {
          return (
            <div id={item.id}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img src={item.image} alt="" />
                <div className="p-5">
                  <h1 className="text-2xl font-bold text-center">{item.title}</h1>
                  <p className="mt-2 text-lg font-semibold text-gray-600 text-center">{item.stack}</p>
                  <p className="mt-1 text-gray-500 text-center">{item.desc}</p>
                </div>
                <div className="p-5 flex justify-center">
                  <a className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-3 px-6 mt-5 rounded-xl mt-300" href={item.github} target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects