import { useCallback, useState } from "react"
import * as Mie from "@mielo-ui/mielo-react"
import { useMediaQuery } from "usehooks-ts"
import { useSelector } from "react-redux"

import * as selectors from "../../selectors"
import { ListItemLink } from "./ListItemLink"
import { FontSwitcher } from "../FontSwitcher"
import logo from "./logo.png"
import { GithubIcon } from "../DocsHeaderbar/GithubIcon"

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
]

export function SubMenu({ title, subtitle, links }: PageItemOptions) {
  const [opened, setOpened] = useState(false)

  const onToggle = useCallback(() => {
    setOpened(prev => !prev)
  }, [])

  return (
    <>
      <Mie.L.ListItem
        description={subtitle}
        onClick={onToggle}
        title={title}
        activatable
        ph="large"
        pv
      />

      <Mie.Collapsible open={opened}>
        <Mie.L.View ph="large" pv>
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
                    pv="large"
                    ph="large"
                    rt={isFirst}
                    rb={isLast}
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
      animateStyle={isMobile ? "shift" : "width"}
      className="blured"
      opened={isOpen}
      headerbar={
        <Mie.HeaderBar
          header={<Mie.Header title="Documentation" subtitle="UI Elements" />}
          transparent
        />
      }
    >
      {isMobile && (
        <Mie.L.View mh="large" mv="large">
          <FontSwitcher />
        </Mie.L.View>
      )}

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

        <Mie.L.List m="none">
          <ListItemLink
            description="Installatiion, setup, etc..."
            title="Getting Started"
            activatable
            ph="large"
            link="/"
            pv
          />

          {components.map(_menuMapper)}
        </Mie.L.List>

        {isMobile && (
          <Mie.L.Item
            link="https://github.com/mielo-ui/mielo.css"
            icon={<Mie.Icon accent icon={<GithubIcon />} />}
            title="GitHub"
            activatable
            mt="large"
            active
            accent
            mh
            p
            r
          />
        )}
      </Mie.L.View>
    </Mie.SplitView.Sidebar>
  )
}

DocsSidebar.displayName = "Mie.SplitView.Sidebar"