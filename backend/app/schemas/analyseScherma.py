from pydantic import BaseModel

class analyseResponse(BaseModel):
  text:str
  word_count:int
  filename:str
  file_type:str

