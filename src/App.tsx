import { Router, Route, useLocation, useRoute } from "wouter"
import { useCallback, useState, MouseEvent } from "react"
import * as Mie from "mielo-react"

import * as ComponentPages from "./pages"
import * as DemoPages from "./demo"

function PageListItem({ title, page }: { title: string; page: string }) {
  const [_, navigate] = useLocation()
  const [isActive] = useRoute(`/${page}`)

  const onClickLink = useCallback(
    (event: MouseEvent<any>) => {
      event.preventDefault()
      event.stopPropagation()
      navigate(`/${page}`)
    },
    [page, title],
  )

  return (
    <Mie.ListItem
      onClick={onClickLink}
      active={isActive}
      link={`/${page}`}
      title={title}
      activatable
    />
  )
}

function App() {
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(true)
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true)

  const componentsPages: any = {
    typography: { title: "Typography", page: "typography" },
    header: { title: "Header", page: "header" },
    headerbar: { title: "HeaderBar", page: "headerbar" },
    button: { title: "Button", page: "button" },
    icons: { title: "Icons", page: "icons" },
    entry: { title: "Entry", page: "entry" },
    checkbox: { title: "Checkbox", page: "checkbox" },
    toggle: { title: "Toggle", page: "toggle" },
    select: { title: "Select", page: "select" },
    radio: { title: "Radio", page: "radio" },
    slider: { title: "Slider", page: "slider" },
    progress: { title: "Progress", page: "progress" },
    item: { title: "Item", page: "Item" },
    list: { title: "List", page: "list" },
    row: { title: "Row", page: "row" },
    tab: { title: "Tab", page: "tab" },
    card: { title: "Card", page: "card" },
    dialog: { title: "Dialog", page: "dialog" },
    message: { title: "Message", page: "message" },
    notification: { title: "Notification", page: "notification" },
  }

  const demoPages: any = {
    basic: { title: "Basic", page: "basic" },
    extended: { title: "Extended", page: "extended" },
  }

  const links = Object.keys(componentsPages).map(page => (
    <PageListItem key={`page-item-${page}`} {...componentsPages[page]} />
  ))

  const linksDemo = Object.keys(demoPages).map(page => (
    <PageListItem key={`page-item-${page}`} {...demoPages[page]} />
  ))

  return (
    <Mie.SplitView theme={darkThemeEnabled ? "dark" : "light"}>
      <Mie.SplitView.Sidebar
        opened={sidebarIsOpen}
        headerbar={
          <Mie.HeaderBar
            header={<Mie.Header title="Components" />}
            attached="splitview"
            transparent
          />
        }
      >
        <Mie.List>
          {links}
          <div className="divider"></div>

          <Mie.Header
            title="Demo Apps"
            subtitle="Complex demo app pages"
            size="large"
            attached="list"
          />

          <div className="divider"></div>

          {linksDemo}
        </Mie.List>
      </Mie.SplitView.Sidebar>
      <Mie.SplitView.Content
        headerbar={
          <Mie.HeaderBar
            attached="splitview"
            transparent
            header={
              <Mie.Header
                title="Mieaita Web"
                subtitle="List of all components"
              />
            }
            left={
              <Mie.Button
                icon={<Mie.Icons.SidebarShow />}
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              />
            }
            right={
              <Mie.Checkbox
                onChange={event => setDarkThemeEnabled(event.target.checked)}
                checked={darkThemeEnabled}
                label="Dark Theme"
                toggle
                icon={{
                  indicator: {
                    unchecked: <Mie.Icons.WeatherClear />,
                    checked: <Mie.Icons.WeatherClearNight />,
                  },
                }}
              />
            }
          />
        }
      >
        <Router>
          {/* Components */}
          <Route path="typography" component={ComponentPages.TypographyPage} />
          <Route path="header" component={ComponentPages.HeaderPage} />
          <Route path="headerbar" component={ComponentPages.HeaderBarPage} />
          <Route path="checkbox" component={ComponentPages.CheckboxPage} />
          <Route path="toggle" component={ComponentPages.TogglePage} />
          <Route path="radio" component={ComponentPages.RadioPage} />
          <Route path="select" component={ComponentPages.SelectPage} />
          <Route path="slider" component={ComponentPages.SliderPage} />
          <Route path="progress" component={ComponentPages.ProgressPage} />
          <Route path="item" component={ComponentPages.ItemPage} />
          <Route path="button" component={ComponentPages.ButtonPage} />
          <Route path="dialog" component={ComponentPages.DialogPage} />
          <Route path="message" component={ComponentPages.MessagePage} />
          <Route path="notify" component={ComponentPages.NotifyPage} />
          <Route path="entry" component={ComponentPages.EntryPage} />
          <Route path="list" component={ComponentPages.ListPage} />
          <Route path="card" component={ComponentPages.CardPage} />
          <Route path="row" component={ComponentPages.RowPage} />
          <Route path="tab" component={ComponentPages.TabPage} />
          <Route path="icons" component={ComponentPages.IconsPage} />

          {/* Demo */}
          <Route path="basic" component={DemoPages.BasicDemoPage} />
          <Route path="extended" component={DemoPages.ExtendedDemoPage} />
        </Router>
      </Mie.SplitView.Content>
    </Mie.SplitView>
  )
}

export default App
