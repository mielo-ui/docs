import { useCallback, useState } from "react"
import { useSelector } from "react-redux"
import * as Mie from "mielo-react"

import * as selectors from "../../selectors"
import { ListItemLink } from "./ListItemLink"

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
      { page: "tabs", title: "Tabs" },
      { page: "cards", title: "Cards" },
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
          <Mie.L.View content f fc r>
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
          header={<Mie.Header title="Components" />}
          attached="splitview"
          transparent
        />
      }
    >
      <Mie.L.List m="none">
        {components.map(_menuMapper)}

        <Mie.L.View p>
          <Mie.Header title="Showcase" subtitle="Complex demo examples" />
        </Mie.L.View>

        {demo.map(_menuMapper)}
      </Mie.L.List>
    </Mie.SplitView.Sidebar>
  )
}

DocsSidebar.displayName = "Mie.SplitView.Sidebar"