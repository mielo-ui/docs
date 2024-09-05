import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import { getCurrentWindow } from "@tauri-apps/api/window"
import { useSelector, useDispatch } from "react-redux"
import * as Mie from "@mielo-ui/mielo-react"
import { useMediaQuery } from "usehooks-ts"
import { useCallback } from "react"
import { useRoute } from "wouter"

import { toggleSidebar, toggleDarkTheme } from "../../state/states"
import { callWindowControl, isDesktop } from "../../../../desktop"
import * as selectors from "../../selectors"
import { AppDispatch } from "../../state"

import { ThemeSwitcher } from "../ThemeSwitcher"
import { FontSwitcher } from "../FontSwitcher"
import { GithubLink } from "../../components/GithubLink/GithubLink"

export interface DocsHeaderbarProps {
  shadow?: boolean | "outer" | "inner"
}

export function DocsHeaderbar({ shadow }: DocsHeaderbarProps) {
  const darkThemeEnable = useSelector(selectors.darkThemeEnable)
  const sidebarOpen = useSelector(selectors.sidebarOpen)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const dispatch = useDispatch<AppDispatch>()
  const [isHomePage] = useRoute("/")

  const onClickControl = useCallback(
    (
      _event: React.MouseEvent<HTMLButtonElement>,
      controlType: Mie.WindowControlType,
    ) => {
      callWindowControl(controlType)
    },
    [],
  )

  const onToggleSidebar = useCallback(() => {
    dispatch(toggleSidebar(!sidebarOpen))
  }, [sidebarOpen])

  const onToggleDarkTheme = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(toggleDarkTheme(event.target.checked))
    },
    [],
  )

  const header = !isHomePage && <Mie.Header title="Mielo" size="tiny" />
  const windowControls = (!isMobile || isDesktop()) && (
    <Mie.Window.Controls
      onClickControl={onClickControl}
      controls={["minimize", "close"]}
    />
  )

  return (
    <Mie.L.HeaderBar
      controls={windowControls}
      data-desktop-drag={true}
      shadow={shadow}
      header={header}
      left={
        <>
          <Mie.L.Button
            icon={<Mie.Icon icon={<Icons.Actions.SidebarShow />} />}
            onClick={onToggleSidebar}
            mr
          />

          {!isMobile && (
            <>
              <FontSwitcher />

              <Mie.L.View ml="small">
                <ThemeSwitcher />
              </Mie.L.View>
            </>
          )}
        </>
      }
      right={
        <Mie.L.View f fr fai="center">
          {!isMobile && <GithubLink target="headerbar" />}
          
          <Mie.L.Checkbox
            onChange={onToggleDarkTheme}
            checked={darkThemeEnable}
            accent="success"
            mr={windowControls ? "small" : "none"}
            toggle
            label={
              <Mie.Icon
                icon={
                  darkThemeEnable ? (
                    <Icons.Status.WeatherClearNight />
                  ) : (
                    <Icons.Status.WeatherClear />
                  )
                }
              />
            }
          />
        </Mie.L.View>
      }
    />
  )
}