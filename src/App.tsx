import { useDispatch, useSelector } from "react-redux"
import { useMediaQuery } from "usehooks-ts"
import { useCallback, useEffect } from "react"
import * as Mie from "@mielo-ui/mielo-react"

import { DocsHeaderbar, DocsSidebar } from "./containers"
import * as selectors from "./selectors"
import { AppDispatch } from "./store"
import * as states from "./states"
import { Routes } from "./Routes"

function App() {
  const darkThemeEnable = useSelector(selectors.darkThemeEnable)
  const sidebarOpen = useSelector(selectors.sidebarOpen)
  const uiFont = useSelector(selectors.uiFont)

  const matches = useMediaQuery("(max-width: 768px)")
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
    overlay: matches && onToggleSidebar,
    sidebarOpen,

    sidebar: ({ open }) => <DocsSidebar open={open} />,
    headerbar: ({ scrollTop }) => (
      <DocsHeaderbar shadow={scrollTop > 0 ? "outer" : false} />
    ),
  }

  return (
    <Mie.L.Window transparent split={splitProps} data-theme={theme}>
      <Routes />
    </Mie.L.Window>
  )
}

export default App