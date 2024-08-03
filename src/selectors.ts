import { RootState } from "./store"

export const darkThemeEnable = (state: RootState) => {
  return state.config.darkThemeEnable
}

export const sidebarOpen = (state: RootState) => {
  return state.config.sidebarOpen
}

export const uiFont = (state: RootState) => {
  return state.config.uiFont
}