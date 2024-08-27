import { getCurrentWindow } from "@tauri-apps/api/window"
import ReactDOM from "react-dom/client"
import { DocsApp } from "./apps"
import "./styles/index.scss"

const appWindow = (window as any).__TAURI_INTERNALS__ && getCurrentWindow()

if (appWindow) {
  document.body.classList.add("tauri")
}

const root = document.getElementById("root")
ReactDOM.createRoot(root!).render(<DocsApp />)