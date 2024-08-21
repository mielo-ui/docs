import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import { useSelector, useDispatch } from "react-redux"
import * as Mie from "@mielo-ui/mielo-react"
import { useMediaQuery } from "usehooks-ts"
import { useCallback } from "react"
import { useRoute } from "wouter"

import { toggleSidebar, toggleDarkTheme } from "../../states"
import * as selectors from "../../selectors"
import { AppDispatch } from "../../store"
import { GithubIcon } from "./GithubIcon"
import { FontSwitcher } from "../FontSwitcher"
import { ThemeSwitcher } from "../ThemeSwitcher "

export interface DocsHeaderbarProps {
  shadow?: boolean | "outer" | "inner"
}

export function DocsHeaderbar({ shadow }: DocsHeaderbarProps) {
  const darkThemeEnable = useSelector(selectors.darkThemeEnable)
  const sidebarOpen = useSelector(selectors.sidebarOpen)
  const isMobile = useMediaQuery("(max-width: 768px)")
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

  const header = !isHomePage && <Mie.Header title="Mielo" size="tiny" />

  return (
    <Mie.L.HeaderBar
      controls={
        !isMobile && <Mie.Window.Controls controls={["minimize", "close"]} />
      }
      className={isHomePage && "homepage"}
      shadow={shadow}
      header={header}
      transparent
      left={
        <>
          <Mie.L.Button
            icon={<Mie.Icon icon={<Icons.Actions.SidebarShow />} />}
            onClick={onToggleSidebar}
            mr
          />

          {!isMobile && <FontSwitcher />}
          {!isMobile && (
            <Mie.L.View ml="small">
              <ThemeSwitcher />
            </Mie.L.View>
          )}
        </>
      }
      right={
        <Mie.L.View f fr fai="center">
          {!isMobile && (
            <Mie.L.Item
              link="https://github.com/mielo-ui/mielo.css"
              icon={<Mie.Icon icon={<GithubIcon />} />}
              title={
                <Mie.L.Text ml="small" fbold>
                  GitHub
                </Mie.L.Text>
              }
              activatable
              p="tiny"
              mr
              r
            />
          )}
          <Mie.L.Checkbox
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
            onChange={onToggleDarkTheme}
            checked={darkThemeEnable}
            accent="success"
            mr="big"
            toggle
          />
        </Mie.L.View>
      }
    />
  )
}