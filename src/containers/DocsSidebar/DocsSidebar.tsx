import * as Icons from "adwaita-symbolic-icons-react"
import { useCallback, useState } from "react"
import { useSelector } from "react-redux"
import * as Mie from "mielo-react"

import { ListItemLink } from "./ListItemLink"
import * as selectors from "../../selectors"

import logo from "./logo.png"

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
    title: "Layout",
    subtitle: "Position helpers",
    links: [
      { page: "corners", title: "Corners" },
      { page: "shadow", title: "Shadow" },
      { page: "indents", title: "Indents" },
      { page: "flex", title: "Flex" },
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
    title: "Basic",
    subtitle: "Common ui elements",
    links: [
      { page: "button", title: "Button" },
      { page: "icon", title: "Icon" },
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
      { page: "headerbar", title: "HeaderBar" },
      { page: "tabs", title: "Tabs" },
    ],
  },
  {
    title: "Lists",
    subtitle: "Group related content",
    links: [
      { page: "list", title: "List" },
      { page: "row", title: "Rows" },
      { page: "item", title: "Item" },
    ],
  },
  {
    title: "Popups",
    subtitle: "Popup content",
    links: [
      { page: "dialog", title: "Dialog" },
      { page: "message", title: "Message" },
      { page: "notification", title: "Notification" },
    ],
  },
  {
    title: "Complex ",
    subtitle: "Popup content",
    links: [{ page: "card", title: "Card" }],
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
          <Mie.L.View content f fc r shadow>
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
  const sidebarOpen = useSelector(selectors.sidebarOpen)

  const _menuMapper = (options: PageItemOptions, idx: number) => {
    return <SubMenu key={`submenu-${idx}`} {...options} />
  }

  return (
    <Mie.SplitView.Sidebar
      opened={sidebarOpen}
      headerbar={
        <Mie.HeaderBar
          header={<Mie.Header title="Documentation" subtitle="UI Elements" />}
          attached="splitview"
          transparent
        />
      }
    >
      <Mie.L.View mt="large" mb="massive" f fai="center" fjc="center">
        {/* <Mie.Icon
          icon={<Icons.Status.DialogInformation />}
          accent="success"
          size="massive"
        /> */}

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
    </Mie.SplitView.Sidebar>
  )
}

DocsSidebar.displayName = "Mie.SplitView.Sidebar"