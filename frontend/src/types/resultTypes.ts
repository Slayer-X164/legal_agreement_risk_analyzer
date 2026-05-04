type documentNameStore = {
  name:string
  setName:(name:string)=>void
  type:string
  setTypeOfDocument:(type:string)=>void
}
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

type Theme = "dark" | "light" | null
type themeStore = {
  theme: Theme,
  setTheme: (theme:Theme) => void
}
type result = "heatmap" | "list"
type typeOfResultStore = {
  typeOfResult: result,
  setTypeOfResult: (type:result)=>void
}

type RiskLevel = "high"|"medium"|"low"

type selectedClauseStore = {
  selectedClauseId:string,
  setSelectedClause:(clauseId:string)=>void
}