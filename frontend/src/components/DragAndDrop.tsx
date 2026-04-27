import { useState } from "react"
import { CiFileOn } from "react-icons/ci"
import { MdClear } from "react-icons/md"
import { RxDownload } from "react-icons/rx"
import File from "./File"

const DragAndDrop = () => {
  const [file, setFile] = useState<File | null>()

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
  console.log(file)
  return (
    <>
      <section className="border-2 max-w-2xl w-full h-86 rounded-3xl border-neutral-700 bg-neutral-900/50 border-dashed mt-10 overflow-hidden">
        <div className="w-full h-full flex flex-col gap-4 items-center justify-center " onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
          {!file ? (
            <>
              <div className="flex flex-col items-center justify-center">
                <div className="px-2 py-1.5 bg-neutral-800/60 rounded-lg mb-2">
                  <RxDownload className="text-neutral-400 text-lg" />
                </div>
                <h2 className="text-md font-semibold text-neutral-400">Drop your contract here</h2>
                <h3 className="text-sm text-neutral-500 font-mono pt-0.5">.PDF .DOCX .TXT</h3>
              </div>
              <div className="flex items-center justify-center text-neutral-600 gap-2">
                <div className="w-30"> <hr /></div>
                <h3>or</h3>
                <div className="w-30"> <hr /></div>

              </div>
              <div className="text-neutral-300 hover:bg-neutral-700 mt-2  transition-all duration-300 bg-neutral-800 rounded-lg active:scale-95">
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
                  <p>{file.name}</p>
                  <div onClick={handleRemoveFile} className="bg-red-600/30 text-red-600 cursor-pointer  rounded-lg p-1">
                    <MdClear />
                  </div>
                </div>
              </div>
              <div className="max-w-xl w-full bg-green-800/30 text-green-500 text-center p-2 rounded-xl hover:bg-green-800/50 active:scale-95 transition-all duration-300 cursor-pointer">
                <h3>Scan & Analyse</h3>
              </div>
            </div>
          )}
        </div>
      </section>

    </>
  )
}

export default DragAndDrop