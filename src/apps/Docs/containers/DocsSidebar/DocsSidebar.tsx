import { useCallback, useState } from "react"
import * as Mie from "@mielo-ui/mielo-react"
import { useMediaQuery } from "usehooks-ts"
import { useSelector } from "react-redux"

import { ThemeSwitcher } from "../ThemeSwitcher"
import { FontSwitcher } from "../FontSwitcher"
import { ListItemLink } from "./ListItemLink"
import * as selectors from "../../selectors"

import logo from "../../../../images/logo.png"
import { GithubLink } from "../../components/GithubLink/GithubLink"

interface PageItemOptions {
  title: string
  subtitle: string
  links: {
    page: string
    title: string
  }[]
}

const components: PageItemOptions[] = [
  {
    title: "Basic",
    subtitle: "Common ui elements",
    links: [
      { page: "button", title: "Button" },
      { page: "label", title: "Label" },
      { page: "image", title: "Image" },
      { page: "icon", title: "Icon" },
    ],
  },
  {
    title: "Text",
    subtitle: "Basic text elements",
    links: [
      { page: "typography", title: "Typography" },
      { page: "header", title: "Header" },
    ],
  },
  {
    title: "Abstract",
    subtitle: "Common containers",
    links: [
      { page: "collapsible", title: "Collapsible" },
      { page: "activatable", title: "Activatable" },
      { page: "view", title: "View" },
      { page: "item", title: "Item" },
    ],
  },
  {
    title: "Forms",
    subtitle: "Related user input",
    links: [
      { page: "entry", title: "Entry" },
      { page: "select", title: "Select" },
      { page: "checkbox", title: "Checkbox" },
      { page: "toggle", title: "Toggle" },
      { page: "radio", title: "Radio" },
      { page: "slider", title: "Slider" },
      { page: "progress", title: "Progress" },
    ],
  },
  {
    title: "Navigation",
    subtitle: "Route elements & containers",
    links: [
      { page: "splitview", title: "SplitView" },
      { page: "headerbar", title: "HeaderBar" },
      { page: "window", title: "Window" },
      // { page: "clamp", title: "Clamp" },
      { page: "tabs", title: "Tabs" },
    ],
  },
  {
    title: "Lists",
    subtitle: "Group related content",
    links: [
      { page: "list", title: "List" },
      { page: "row", title: "Rows" },
    ],
  },
  {
    title: "Popups",
    subtitle: "Popup content",
    links: [
      { page: "dialog", title: "Dialog" },
      { page: "message", title: "Message" },
    ],
  },
  {
    title: "Layout",
    subtitle: "Position helpers",
    links: [
      { page: "abstract", title: "Abstract" },
      { page: "corners", title: "Corners" },
      { page: "shadow", title: "Shadow" },
      { page: "indents", title: "Indents" },
      { page: "flex", title: "Flex" },
    ],
  },
]

export function SubMenu({ title, subtitle, links }: PageItemOptions) {
  const [opened, setOpened] = useState(false)

  const onToggle = useCallback(() => {
    setOpened(prev => !prev)
  }, [])

  return (
    <>
      <Mie.L.List.Item
        description={subtitle}
        onClick={onToggle}
        title={title}
        activatable
        pv="small"
        ph
      />

      <Mie.Collapsible open={opened}>
        <Mie.L.View ph="large" pv="small">
          <Mie.L.View bg="content" f fc r shadow>
            <Mie.L.List p="none" r>
              {links.map(({ page, title }, linkIdx, array) => {
                const isLast = linkIdx === array.length - 1
                const isFirst = linkIdx === 0

                return (
                  <ListItemLink
                    key={`menu-${linkIdx}`}
                    link={`/${page}`}
                    title={title}
                    activatable
                    rt={isFirst}
                    rb={isLast}
                    pv="small"
                    ph="small"
                  />
                )
              })}
            </Mie.L.List>
          </Mie.L.View>
        </Mie.L.View>
      </Mie.Collapsible>
    </>
  )
}

export function DocsSidebar() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isOpen = useSelector(selectors.sidebarOpen)

  const _menuMapper = (options: PageItemOptions, idx: number) => {
    return <SubMenu key={`submenu-${idx}`} {...options} />
  }

  return (
    <Mie.SplitView.Sidebar
      animateStyle={isMobile ? "overlap" : "width"}
      className="docs"
      opened={isOpen}
      headerbar={
        <Mie.HeaderBar
          header={
            <Mie.Header
              title="Documentation"
              subtitle="UI Elements"
              size="tiny"
              center
            />
          }
          transparent
        />
      }
    >
      <Mie.L.View f fc f1 scrollable>
        <Mie.L.View mt="large" mb="massive" f fai="center" fjc="center">
          <img
            className="mie shadow"
            src={logo}
            style={{
              borderRadius: "1rem 1.5rem 1rem 1.5rem",
              maxHeight: "6rem",
              maxWidth: "6rem",
            }}
          />
        </Mie.L.View>

        {isMobile && (
          <Mie.L.View mh="large" mv="large" f fc gr="small">
            <FontSwitcher />
            <ThemeSwitcher />
          </Mie.L.View>
        )}

        <Mie.L.List m="none">
          <ListItemLink
            description="Installatiion, gallery, etc..."
            title="Getting Started"
            activatable
            pv="small"
            link="/"
            ph
          />

          <ListItemLink
            description="How to custom themes"
            title="Themes"
            activatable
            pv="small"
            link="/themes"
            ph
          />

          {components.map(_menuMapper)}
        </Mie.L.List>

        {isMobile && (
          <GithubLink target="sidebar" />
        )}
      </Mie.L.View>
    </Mie.SplitView.Sidebar>
  )
}

DocsSidebar.displayName = "Mie.SplitView.Sidebar"