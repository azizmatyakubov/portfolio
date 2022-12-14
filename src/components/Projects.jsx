import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div
      name="Projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      {/* Container  */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

        {/* Container  */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Project Item */}
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  )
}

export default Projects
