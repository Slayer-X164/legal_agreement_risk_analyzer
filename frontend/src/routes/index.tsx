import DragAndDrop from '#/components/DragAndDrop'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="flex items-center flex-col">
      <div className='text-center pt-4'>
        <h1 className="text-4xl font-bold capitalize">know what you are signing</h1>
        <p className="mt-4 text-md capitalize text-neutral-500">
          upload any document/contract and get an instant clause-by-clause <br /> risk breakdown with suggested rewrites
        </p>
      </div>
      <DragAndDrop/>
    </main>
  )
}
