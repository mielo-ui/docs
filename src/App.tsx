import { useDispatch, useSelector } from "react-redux"
import { useMediaQuery } from "usehooks-ts"
import { useCallback } from "react"
import * as Mie from "mielo-react"

import { DocsHeaderbar, DocsSidebar } from "./containers"
import { toggleSidebar } from "./states"
import * as selectors from "./selectors"
import { AppDispatch } from "./store"
import { Routes } from "./Routes"

function App() {
  const darkThemeEnable = useSelector(selectors.darkThemeEnable)
  const sidebarOpen = useSelector(selectors.sidebarOpen)
  const matches = useMediaQuery("(max-width: 768px)")
  const theme = darkThemeEnable ? "dark" : "light"
  const dispatch = useDispatch<AppDispatch>()

  const onToggleSidebar = useCallback(() => {
    dispatch(toggleSidebar(!sidebarOpen))
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