import { Link } from "@tanstack/react-router"
import { MdErrorOutline } from "react-icons/md"

const ResultNotFound = () => {
  return (
    <div className=' h-90 flex flex-col items-center justify-center'>
      <MdErrorOutline className='text-6xl text-neutral-400/50' />
      <h3 className='text-lg font-semibold text-neutral-400/80'>No Result Found !</h3>
      <Link to="/" className='mt-6 text-sm underline text-neutral-400 underline-offset-2 rounded-3xl px-4 py-1.5 font-semibold'>Back To Home</Link>
    </div>
  )
}

export default ResultNotFound