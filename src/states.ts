import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ConfigState {
  darkThemeEnable?: boolean
  sidebarOpen?: boolean
}

const initialState = {
  darkThemeEnable: true,
  sidebarOpen: true,
}

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    toggleSidebar(
      state,
      { payload }: PayloadAction<boolean | undefined>,
    ) {
      state.sidebarOpen =
        typeof payload === "boolean" ? payload : !state.sidebarOpen
    },
    
    toggleDarkTheme(
      state,
      { payload }: PayloadAction<boolean | undefined>,
    ) {
      state.darkThemeEnable =
        typeof payload === "boolean" ? payload : !state.darkThemeEnable
    },
  },
})

const { actions, reducer } = configSlice
export const { toggleSidebar, toggleDarkTheme } = actions
export default reducer