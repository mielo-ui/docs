import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type UiFont = "Roboto" | "Inter" | "Ubuntu"
export type UiTheme = "Default" | "Material"

export interface ConfigState {
  darkThemeEnable?: boolean
  sidebarOpen?: boolean
  uiFont: UiFont
  uiTheme?: UiTheme
}

const initialState = {
  darkThemeEnable: true,
  sidebarOpen: false,
  uiFont: "Roboto",
  uiTheme: "Default",
}

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    toggleSidebar(state, { payload }: PayloadAction<boolean | undefined>) {
      state.sidebarOpen =
        typeof payload === "boolean" ? payload : !state.sidebarOpen
    },

    toggleDarkTheme(state, { payload }: PayloadAction<boolean | undefined>) {
      state.darkThemeEnable =
        typeof payload === "boolean" ? payload : !state.darkThemeEnable
    },

    setUiFont(state, { payload }: PayloadAction<UiFont>) {
      state.uiFont = payload
    },

    setTheme(state, { payload }: PayloadAction<UiTheme>) {
      state.uiTheme = payload
    },
  },
})

const { actions, reducer } = configSlice
export const { toggleSidebar, toggleDarkTheme, setUiFont, setTheme } = actions
export default reducer