import { electronAPI } from "@electron-toolkit/preload"
import { ipcRenderer } from "electron/renderer"
import { contextBridge } from "electron"

// Custom APIs for renderer
const api = {
  windowControl: (action: string) =>
    ipcRenderer.invoke("window:control", action),
  otherOpenExternal: (link: string) => ipcRenderer.invoke("other:openExternal", link)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI)
    contextBridge.exposeInMainWorld("api", api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore
  window.electron = electronAPI
  // @ts-ignore
  window.api = api
}
