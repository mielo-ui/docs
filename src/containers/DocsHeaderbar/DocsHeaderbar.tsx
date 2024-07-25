import { useSelector, useDispatch } from "react-redux"
import * as Icons from "adwaita-symbolic-icons-react"
import { useCallback } from "react"
import * as Mie from "mielo-react"

import { toggleSidebar, toggleDarkTheme } from "../../states"
import * as selectors from "../../selectors"
import { AppDispatch } from "../../store"

export function DocsHeaderbar() {
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
    <Mie.HeaderBar
      attached="splitview"
      transparent
      header={
        <Mie.Header title="Mielo Web" />
      }
      left={
        <Mie.Button
          icon={<Mie.Icon icon={<Icons.Actions.SidebarShow />} />}
          onClick={onToggleSidebar}
        />
      }
      right={
        <Mie.Checkbox
          onChange={onToggleDarkTheme}
          checked={darkThemeEnable}
          label="Dark Theme"
          accent="success"
          toggle
        />
      }
    />
  )
}