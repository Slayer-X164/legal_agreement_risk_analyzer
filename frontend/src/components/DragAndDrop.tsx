import { useState } from "react"
import { MdClear } from "react-icons/md"
import { RxDownload } from "react-icons/rx"
import File from "./File"
import { useNavigate } from "@tanstack/react-router"
import Loading from "./Loading"


const DragAndDrop = () => {
  const [file, setFile] = useState<File | null>()
  const [result,setResult] = useState<resultType>()
  const [loading,setLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile)
    }
  }
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile)
    }
  }
  const handleRemoveFile = () => {
    setFile(null)
  }

  const formdata = new FormData()
  if (file) {
    formdata.append("file", file)

  }
  const handleFileUpload = async () => {
    setLoading(true)
    const res = await fetch(`http://127.0.0.1:8000/api/analyse`, {
      method: "POST",
      body: formdata
    })
    const data = await res.json()
    if(!res.ok){
      throw new Error(data.detail)
    }
    setResult(data)
    navigate({ to: '/results' })
    setLoading(false)
  }
  console.log(result)
  return (
    <>
      <section className=" max-w-2xl w-full h-86 rounded-3xl  mt-10 overflow-hidden ">
        {!loading?(
          <div className="w-full h-full flex flex-col gap-4 items-center justify-center rounded-3xl border-2 border-neutral-400 dark:border-neutral-700 bg-neutral-300/60 dark:bg-neutral-900/50 border-dashed" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
          {!file ? (
            <>
              <div className="flex flex-col items-center justify-center">
                <div className="px-2 py-1.5 bg-neutral-700 rounded-lg mb-2">
                  <RxDownload className="text-neutral-400 text-lg" />
                </div>
                <h2 className="text-md font-semibold text-neutral-600">Drop your contract here</h2>
                <h3 className="text-sm text-neutral-500 font-mono pt-0.5">.PDF .DOCX .TXT</h3>
              </div>
              <div className="flex items-center justify-center text-neutral-600 gap-2">
                <div className="w-30"> <hr /></div>
                <h3>or</h3>
                <div className="w-30"> <hr /></div>

              </div>
              <div className="text-neutral-200 hover:bg-neutral-700 mt-2  transition-all duration-300 bg-neutral-800 rounded-lg active:scale-95">
                <input type="file" id="browse-file" hidden onChange={handleInputChange} accept=".pdf,.docx,.txt" />
                <label htmlFor="browse-file" >
                  <h3 className="cursor-pointer px-4 py-2 text-md">Browse Files</h3>
                </label>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center justify-center gap-2">
                <File />
                <div className="flex gap-3 items-center">
                  <p className="text-sm md:text-md max-w-48">{file.name}</p>
                  <div onClick={handleRemoveFile} className="bg-red-600/30 text-red-700 cursor-pointer  rounded-lg p-1">
                    <MdClear />
                  </div>
                </div>
              </div>
              <button onClick={handleFileUpload} className="w-40 bg-green-700  text-neutral-50 text-center p-2 shadow-2xl shadow-green-500 dark:shadow-green-500/50 dark:bg-green-800 rounded-xl hover:bg-green-900 active:scale-95 transition-all duration-300 cursor-pointer">
                <h3>Scan & Analyse</h3>
              </button>
            </div>
          )}
        </div>
        ):(
          <Loading fileName={file?file.name:""} />
        )}
      </section>

    </>
  )
}

export default DragAndDrop