
type clause = {
  id: string,
  text: string,
  risk: string,
  reason: string,
  suggestion: string
}

type resultType = {
  overall_score: number
  summary: string,
  number_of_clauses:{
    low:number,
    medium:number,
    high:number
  }
  clauses: clause[]
}

type resultStore = {
  result: resultType | null,
  setResult: (result: resultType) => void;
}