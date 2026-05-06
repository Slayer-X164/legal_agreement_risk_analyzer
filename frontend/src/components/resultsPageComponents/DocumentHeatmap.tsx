import { useResultStore } from "#/store/useStore"

const DocumentHeatmap = () => {
  const result = useResultStore((s)=>s.result)
  console.log(result);

  return (
    <div className="p-4 h-full flex-1 gap-6 flex flex-col text-sm overflow-y-auto dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-3xl">Heatmap</div>
  )
}

export default DocumentHeatmap