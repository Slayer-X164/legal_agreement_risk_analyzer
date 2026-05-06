from pydantic import BaseModel
from typing import List

class clause(BaseModel):
  id: str
  text: str
  risk: str
  reason: str
  suggestion: str

class clauseLevels(BaseModel):
    low:int
    medium:int
    high:int


class analyseResponse(BaseModel):
  overall_score: int
  summary: str
  number_of_clauses:clauseLevels
  clauses: List[clause]
  full_raw_doc:str

