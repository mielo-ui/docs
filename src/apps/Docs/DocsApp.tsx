import { MouseEventHandler, useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as Mie from "@mielo-ui/mielo-react"
import { useMediaQuery } from "usehooks-ts"
import { Provider } from "react-redux"
import { Helmet } from "react-helmet"

import { DocsHeaderbar, DocsSidebar } from "./containers"
import * as selectors from "./selectors"
import { AppDispatch } from "./state"
import * as states from "./state"
import { Routes } from "./Routes"

import materialCss from "@mielo-ui/mielo/css/mielo.material.css?raw"
import defaultCss from "@mielo-ui/mielo/css/mielo.css?raw"

function Window() {
  const [cssLoaded, setCssLoaded] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  const darkThemeEnable = useSelector(selectors.darkThemeEnable)
  const sidebarOpen = useSelector(selectors.sidebarOpen)
  const uiTheme = useSelector(selectors.uiTheme)
  const uiFont = useSelector(selectors.uiFont)

  const isMobile = useMediaQuery("(max-width: 768px)")
  const theme = darkThemeEnable ? "dark" : "light"

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--mie-font-family",
      `"${uiFont}"`,
    )
  }, [uiFont])

  useEffect(() => {
    const checkLoaded = () => {
      const rootElement = document.querySelector(':root, [data-theme="light"]')
      const prop = getComputedStyle(rootElement).getPropertyValue("--mie-fg")

      if (prop) {
        setCssLoaded(true)
      } else {
        setTimeout(checkLoaded, 125)
      }
    }

    const watchCssLoadId = setTimeout(checkLoaded, 125)

    return () => {
      clearTimeout(watchCssLoadId)
    }
  }, [])

  const onToggleSidebar: MouseEventHandler<HTMLDivElement> = useCallback(
    event => {
      event.stopPropagation()
      event.preventDefault()

      dispatch(states.toggleSidebar(!sidebarOpen))
    },
    [sidebarOpen],
  )

  const splitProps: Mie.SplitViewProps = {
    overlay: sidebarOpen && isMobile && onToggleSidebar,
    headerbar: <DocsHeaderbar />,
    sidebar: <DocsSidebar />,
  }

  const css = uiTheme === "Material" ? materialCss : defaultCss

  return (
    <>
      <Helmet>
        <style>{css}</style>
      </Helmet>

      {cssLoaded && (
        <Mie.L.Window transparent split={splitProps} data-theme={theme}>
          <Routes />
        </Mie.L.Window>
      )}
    </>
  )
}

export function DocsApp() {
  return (
    <Provider store={states.store}>
      <Window />
    </Provider>
  )
}