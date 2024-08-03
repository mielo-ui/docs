import { useSelector, useDispatch } from "react-redux"
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import { useCallback } from "react"
import * as Mie from "@mielo-ui/mielo-react"

import { toggleSidebar, toggleDarkTheme, setUiFont } from "../../states"
import * as selectors from "../../selectors"
import { AppDispatch } from "../../store"
import { useRoute } from "wouter"

export interface DocsHeaderbarProps {
  shadow?: boolean | "outer" | "inner"
}

export function DocsHeaderbar({ shadow }: DocsHeaderbarProps) {
  const darkThemeEnable = useSelector(selectors.darkThemeEnable)
  const sidebarOpen = useSelector(selectors.sidebarOpen)
  const uiFont = useSelector(selectors.uiFont)
  const dispatch = useDispatch<AppDispatch>()
  const [isHomePage] = useRoute("/")

  const onToggleSidebar = useCallback(() => {
    dispatch(toggleSidebar(!sidebarOpen))
  }, [sidebarOpen])

  const onToggleDarkTheme = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(toggleDarkTheme(event.target.checked))
    },
    [],
  )

  const header = !isHomePage && <Mie.Header title="Mielo Web" />

  return (
    <Mie.L.HeaderBar
      controls={<Mie.Window.Controls controls={["minimize", "close"]} />}
      className={isHomePage && "homepage"}
      shadow={shadow}
      header={header}
      transparent
      left={
        <>
          <Mie.Button
            icon={<Mie.Icon icon={<Icons.Actions.SidebarShow />} />}
            onClick={onToggleSidebar}
          />

          <Mie.L.Select
            onChange={option => dispatch(setUiFont(option.value))}
            value={{ label: uiFont, value: uiFont }}
            size="small"
            label="Font"
            name="font"
            ml="large"
            options={[
              { label: "Roboto", value: "Roboto" },
              { label: "Inter", value: "Inter" },
              { label: "Cantarell", value: "Cantarell" },
            ]}
          />
        </>
      }
      right={
        <Mie.L.Checkbox
          onChange={onToggleDarkTheme}
          checked={darkThemeEnable}
          label="Dark Theme"
          accent="success"
          mr="massive"
          toggle
        />
      }
    />
  )
}