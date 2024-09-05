import { useBrowserLocation } from "wouter/use-browser-location"
import { FunctionComponent, ReactNode } from "react"
import { Router, Route, Redirect } from "wouter"
import { capitalCase } from "change-case"
import { Helmet } from "react-helmet"

import { ThemesPage } from "./pages/Themes"
import { HomePage } from "./pages/Home"
import * as pages from "./pages"

const { entries } = Object

interface WrappedRouteProps {
  component: FunctionComponent
  path: string
}

function WrappedRoute({ component: Component, path }: WrappedRouteProps) {
  return (
    <Route
      path={path}
      component={function Page() {
        return (
          <>
            <Helmet>
              <title>Mielo UI • {capitalCase(path)}</title>
            </Helmet>

            <Component />
          </>
        )
      }}
    />
  )
}

export function Routes() {
  const routes = entries(pages).reduce((routes, [group, components]) => {
    for (const [page, Component] of entries(components)) {
      const name = page.replace("Page", "").toLowerCase()

      routes.push(<WrappedRoute key={name} path={name} component={Component} />)
    }

    return routes
  }, [] as ReactNode[])

  return (
    <Router hook={useBrowserLocation}>
      <Route path="/" component={HomePage} />
      <Route path="/themes" component={ThemesPage} />
      {routes}
      <Redirect to="/" />
    </Router>
  )
}