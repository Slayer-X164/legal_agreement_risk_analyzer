import { FaGithub } from "react-icons/fa"
import Crosshair from "./Crosshair"
import { Link } from "@tanstack/react-router"


const Navbar = () => {
  return (
    <div className='max-w-6xl w-full  flex h-14 justify-between items-center px-8 border-x  border-neutral-800  relative'>
      <div className='flex items-center gap-2'>
        <h1 className="font-bold">ClauseGaurd</h1>
        <h3 className="px-2 py-1 text-sm rounded-sm bg-blue-600/20 text-blue-600">beta</h3>
      </div>
      <a href="https://github.com/Slayer-X164/legal_agreement_risk_analyzer" target="_blank" className=" flex items-center gap-1.5 px-2 py-1 bg-indigo-800 rounded-lg cursor-pointer">
        <FaGithub />
        <h3 className="text-sm">Give a Star</h3>
      </a >
      <Crosshair className="absolute -left-1.5 -bottom-1.5"/>
      <Crosshair className="absolute -right-1.5 -bottom-1.5"/>
    </div>
  )
}

export default Navbar