import { Display } from '#/components/resultsPageComponents/Display'
import ResultNotFound from '#/components/resultsPageComponents/ResultNotFound'
import { ScoreCard } from '#/components/resultsPageComponents/ScoreCard'
import { useResultStore } from '#/store/useStore'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/results')({
  component: RouteComponent,
})



function RouteComponent() {
  const {result} = useResultStore()


  return (
    <>
      {!result != null ? (
        <div className='flex flex-col gap-3 flex-1 w-full h-full  '>
          <ScoreCard />
          <Display/>
        </div>
      ) : (
        <ResultNotFound />
      )}
    </>
  )
}

