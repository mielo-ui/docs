import { useSelector, useDispatch } from "react-redux"
import * as Icons from "adwaita-symbolic-icons-react"
import { useCallback } from "react"
import * as Mie from "mielo-react"

import { toggleSidebar, toggleDarkTheme } from "../../states"
import * as selectors from "../../selectors"
import { AppDispatch } from "../../store"

export interface DocsHeaderbarProps {
  shadow?: boolean | "outer" | "inner"
}

export function DocsHeaderbar({ shadow }: DocsHeaderbarProps) {
  const darkThemeEnable = useSelector(selectors.darkThemeEnable)
  const sidebarOpen = useSelector(selectors.sidebarOpen)
  const dispatch = useDispatch<AppDispatch>()

  const onToggleSidebar = useCallback(() => {
    dispatch(toggleSidebar(!sidebarOpen))
  }, [sidebarOpen])

  const onToggleDarkTheme = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(toggleDarkTheme(event.target.checked))
    },
    [],
  )

  return (
    <Mie.L.HeaderBar
      controls={<Mie.Window.Controls controls={["minimize", "close"]} />}
      header={<Mie.Header title="Mielo Web" />}
      shadow={shadow}
      transparent
      left={
        <Mie.Button
          icon={<Mie.Icon icon={<Icons.Actions.SidebarShow />} />}
          onClick={onToggleSidebar}
        />
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