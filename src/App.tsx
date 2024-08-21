import { useDispatch, useSelector } from "react-redux"
import { useMediaQuery } from "usehooks-ts"
import { useCallback, useEffect } from "react"
import * as Mie from "@mielo-ui/mielo-react"
import {Helmet} from "react-helmet"

import { DocsHeaderbar, DocsSidebar } from "./containers"
import * as selectors from "./selectors"
import { AppDispatch } from "./store"
import * as states from "./states"
import { Routes } from "./Routes"

import themeMaterial from "@mielo-ui/mielo/css/mielo.material.full.css?raw"
import themeDefault from "@mielo-ui/mielo/css/mielo.full.css?raw"

function App() {
  const darkThemeEnable = useSelector(selectors.darkThemeEnable)
  const sidebarOpen = useSelector(selectors.sidebarOpen)
  const uiTheme = useSelector(selectors.uiTheme)
  const uiFont = useSelector(selectors.uiFont)

  const isMobile = useMediaQuery("(max-width: 768px)")
  const theme = darkThemeEnable ? "dark" : "light"
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--mie-font-family",
      `"${uiFont}"`,
    )
  }, [uiFont])

  const onToggleSidebar = useCallback(() => {
    dispatch(states.toggleSidebar(!sidebarOpen))
  }, [sidebarOpen])

  const splitProps: Mie.SplitViewProps = {
    overlay: sidebarOpen && isMobile && onToggleSidebar,
    headerbar: <DocsHeaderbar />,
    sidebar: <DocsSidebar />,
  }

  return (
    <Mie.L.Window transparent split={splitProps} data-theme={theme}>
      <Helmet>
        <style>{uiTheme === "Material" ? themeMaterial : themeDefault}</style>
      </Helmet>
      <Routes />
    </Mie.L.Window>
  )
}

export default App