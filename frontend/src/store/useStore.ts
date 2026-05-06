import {create} from "zustand"

export const useDocumentNameStore = create<documentNameStore>((set)=>({
  name:"",
  setName(name) {
    set({name})
  },
  type:"",
  setTypeOfDocument:(type:string)=>set({type})
}))
export const useResultStore = create<resultStore>((set)=>({
  result:null,
  setResult: (result)=>set({result})
}))

export const useThemeStore = create<themeStore>((set)=>({
  theme:null,
  setTheme: (theme)=>set({theme})
}))


export const useSelectedClauseStore = create<selectedClauseStore>((set)=>({
  selectedClauseId:"c1",
  setSelectedClause: (clauseId)=>set({selectedClauseId:clauseId})
}))