import ReactDOM from "react-dom/client"
import { DocsApp } from "./apps"

import { isDesktop } from "./desktop"
import "./styles/index.scss"

export function setup() {
  if (!isDesktop()) {
    document.body.classList.add("web")
  }

  const root = document.getElementById("root")
  ReactDOM.createRoot(root!).render(<DocsApp />)
}