import {create} from "zustand"

export const useResultStore = create<resultStore>((set)=>({
  result:null,
  setResult: (result)=>set({result})
}))