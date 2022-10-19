import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import ReactIcon from '../assets/react.png'
import Nodejs from '../assets/node.png'
import MongoDB from '../assets/mongo.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Skill from './Skill'

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container  */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <Skill icon={HTML} text="HTML" />
          <Skill icon={CSS} text="CSS" />
          <Skill icon={JS} text="JavaScript" />
          <Skill icon={ReactIcon} text="React" />
          <Skill icon={Nodejs} text="Nodejs" />
          <Skill icon={MongoDB} text="MongoDB" />
          <Skill icon={Github} text="Github" />
          <Skill icon={Tailwind} text="Tailwind" />
        </div>
      </div>
    </div>
  )
}

export default Skills
