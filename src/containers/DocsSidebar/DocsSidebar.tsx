import { Fragment } from "react/jsx-runtime"
import { useSelector } from "react-redux"
import * as Mie from "mielo-react"

import * as selectors from "../../selectors"
import { ListItemLink } from "./ListItemLink"
import { useCallback, useState } from "react"

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
      { page: "icons", title: "Icons" },
    ],
  },
  {
    title: "Forms",
    subtitle: "Related user input",
    links: [
      { page: "entry", title: "Entry" },
      { page: "checkbox", title: "Checkbox" },
      { page: "toggle", title: "Toggle" },
      { page: "select", title: "Select" },
      { page: "radio", title: "Radio" },
      { page: "slider", title: "Slider" },
      { page: "progress", title: "Progress" },
    ],
  },
  {
    title: "Navigation",
    subtitle: "Route elements & containers",
    links: [{ page: "headerbar", title: "HeaderBar" }],
  },
  {
    title: "Lists",
    subtitle: "Group related content",
    links: [
      { page: "item", title: "Item" },
      { page: "list", title: "List" },
      { page: "row", title: "Row" },
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
    links: [
      { page: "tab", title: "Tab" },
      { page: "card", title: "Card" },
    ],
  },
]

const demo: PageItemOptions[] = [
  {
    title: "Basic",
    subtitle: "Common examples",
    links: [
      { page: "headerbar_window_demo", title: "Window HeaderBar" },
      { page: "stepper_form", title: "Stepper Form" },
    ],
  },
]

export function SubMenu({ title, subtitle, links }: PageItemOptions) {
  const [opened, setOpened] = useState(false)

  const onToggle = useCallback(() => {
    setOpened((prev) => !prev)
  }, [])

  return (
    <>
      <Mie.ListItem
        description={subtitle}
        title={title}
        activatable
        onClick={onToggle}
      />

      {opened && (
        <Mie.View window rounded style={{ padding: "0.4rem 0", marginTop: "0.4rem", marginBottom: "0.8rem" }}>
          <Mie.List>
            {links.map(({ page, title }, linkIdx) => (
              <ListItemLink
                key={`menu-${linkIdx}`}
                title={title}
                link={page}
              />
            ))}
          </Mie.List>
        </Mie.View>
      )}
    </>
  )
}

export function DocsSidebar() {
  const sidebarOpen = useSelector(selectors.sidebarOpen)

  const _menuMapper = (
    options: PageItemOptions,
    idx: number,
  ) => {
    return (
      <SubMenu key={`submenu-${idx}`} {...options} />
    )
  }

  return (
    <Mie.SplitView.Sidebar
      opened={sidebarOpen}
      headerbar={
        <Mie.HeaderBar
          header={<Mie.Header title="Components" />}
          attached="splitview"
          transparent
        />
      }
    >
      <Mie.List>
        {components.map(_menuMapper)}

        <div className="divider"></div>

        <Mie.Header
          title="Showcase"
          subtitle="Complex demo examples"
          attached="list"
        />

        <div className="divider"></div>

        {demo.map(_menuMapper)}
      </Mie.List>
    </Mie.SplitView.Sidebar>
  )
}

DocsSidebar.displayName = "Mie.SplitView.Sidebar"