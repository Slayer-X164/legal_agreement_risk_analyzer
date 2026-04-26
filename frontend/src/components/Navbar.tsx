import Crosshair from "./Crosshair"


const Navbar = () => {
  return (
    <div className='max-w-6xl w-full  flex h-16 justify-between items-center px-8 border-x border-neutral-800  relative'>
      <div className='flex items-center gap-2'>
        <h1 className="font-bold">ClauseGaurd</h1>
        <h3 className="px-2 py-1 text-sm rounded-sm bg-blue-600/20 text-blue-600">beta</h3>
      </div>
      <div>
        give a star
      </div>
      <Crosshair className="absolute -left-1.5 -bottom-1.5"/>
      <Crosshair className="absolute -right-1.5 -bottom-1.5"/>
    </div>
  )
}

export default Navbar