import { RootState } from "./state"

export const darkThemeEnable = (state: RootState) => {
  return state.config.darkThemeEnable
}

export const sidebarOpen = (state: RootState) => {
  return state.config.sidebarOpen
}

export const uiFont = (state: RootState) => {
  return state.config.uiFont
}

export const uiTheme = (state: RootState) => {
  return state.config.uiTheme
}