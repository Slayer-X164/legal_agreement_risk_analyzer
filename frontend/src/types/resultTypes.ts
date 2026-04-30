
type clause = {
  id: number,
  text: string,
  risk: string,
  reason: string,
  suggestion: string
}

type resultType = {
  overall_score: number
  summary: string,
  clauses: clause[]
}

type resultStore = {
  result: resultType | null,
  setResult: (result: resultType) => void;
}