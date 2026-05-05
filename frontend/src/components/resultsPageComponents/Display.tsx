import { useTypeOfResultStore } from "#/store/useStore";
import ClauseList from "./ClauseList";
import DocumentHeatmap from "./DocumentHeatmap";
import RightDisplay from "./RightDisplay";

export const Display = () => {
  const typeOfResult = useTypeOfResultStore(s=>s.typeOfResult)
  return (
    <div className='flex  gap-3 flex-1 min-h-0'>
      <div className='flex-1 overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-3xl'>
        {typeOfResult == "heatmap" ? (
          <DocumentHeatmap/>
        ):(
          <ClauseList/>
        )}
      </div>
      <RightDisplay/>
    </div>
  )
}