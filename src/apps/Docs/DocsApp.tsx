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

import materialCss from "@mielo-ui/mielo/css/mielo.material.full.css?raw"
import defaultCss from "@mielo-ui/mielo/css/mielo.full.css?raw"

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
    const _check = () => {
      const root = getComputedStyle(
        document.querySelector(":root, [data-theme=\"light\"]"),
      ).getPropertyValue("--mie-fg")

      if (root) {
        setCssLoaded(true)
      } else {
        setTimeout(_check, 125)
      }
    }

    const watchCssLoadId = setTimeout(_check, 125)

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