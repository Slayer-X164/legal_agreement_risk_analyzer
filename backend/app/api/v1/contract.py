from fastapi import APIRouter,File,UploadFile,HTTPException
from app.services.text_extract_service import extract_text
from app.services.text_analyse_service import analyse_text
from app.schemas.contract_schema import analyseResponse

router = APIRouter()

@router.post("")
async def analyse(file: UploadFile = File()):
  try:
    data = await extract_text(file)
    analysis = await analyse_text(data[:300])
    return {"output":analysis}
    # return analyseResponse(
    #     text=data,
    #     word_count=len(data.split()),
    #     filename=file.filename,
    #     file_type=file.filename.split(".")[-1]
    # )
  except Exception as e:
    raise HTTPException(status_code=500,detail=str(e))


