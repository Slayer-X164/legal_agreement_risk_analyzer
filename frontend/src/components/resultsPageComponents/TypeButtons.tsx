import { useTypeOfResultStore } from "#/store/useStore"
import {GoListUnordered, GoProjectRoadmap} from "react-icons/go"

export const TypeButtons = () => {
  const typeOfResult = useTypeOfResultStore(s=>s.typeOfResult)
    const setTypeOfResult = useTypeOfResultStore(s=>s.setTypeOfResult)
  return (
    <div className='flex items-center justify-start w-full gap-3'>
      <button onClick={() => setTypeOfResult("heatmap")} className={`${typeOfResult == "heatmap" && "bg-neutral-300  dark:bg-neutral-700 "}  font-semibold text-neutral-800  flex items-center gap-1  px-2 py-0.5 rounded-lg text-base border-2 border-dashed border-neutral-300 dark:border-neutral-700 dark:text-neutral-400 cursor-pointer`}><GoProjectRoadmap /><h3>Document Heatmap</h3></button>
      <button onClick={() => setTypeOfResult("list")} className={`${typeOfResult == "list" && "bg-neutral-300  dark:bg-neutral-700 "} font-semibold text-neutral-800   flex items-center gap-1  px-2 py-0.5 rounded-lg text-base border-2 border-dashed border-neutral-300 dark:border-neutral-700 dark:text-neutral-400 cursor-pointer`}><GoListUnordered />Clause List</button>
    </div>
  )
}