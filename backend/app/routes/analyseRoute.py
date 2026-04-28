from fastapi import APIRouter,File,UploadFile,HTTPException
from app.services.analyse_contract import analyse_contract
from app.schemas.analyseScherma import analyseResponse
router = APIRouter()

@router.post("/",response_model=analyseResponse)
async def analyseRoute(file: UploadFile = File()):
  try:
    result = await analyse_contract(file)
    return analyseResponse(
        text=result,
        word_count=len(result.split()),
        filename=file.filename,
        file_type=file.filename.split(".")[-1]
    )
  except Exception as e:
    raise HTTPException(status_code=500,detail=str(e))


