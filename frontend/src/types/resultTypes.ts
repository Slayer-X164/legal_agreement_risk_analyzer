type resultType = {
  overall_score:number
  summary:string,
  clauses:[
    {
      id:number,
      text:string,
      risk:string,
      reason:string,
      suggestion:string
    }
  ]
}