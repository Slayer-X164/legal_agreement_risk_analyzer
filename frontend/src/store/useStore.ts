import {create} from "zustand"

export const useResultStore = create<resultStore>((set)=>({
  result:null,
  setResult: (result)=>set({result})
}))

export const useThemeStore = create<themeStore>((set)=>({
  theme:null,
  setTheme: (theme)=>set({theme})
}))