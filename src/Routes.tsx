import { FunctionComponent, ReactNode } from "react"
import { Router, Route } from "wouter"
import { Helmet } from "react-helmet"

import { HomePage } from "./pages/Home"
import * as pages from "./pages"
import { capitalCase } from "change-case"

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
    <Router>
      <Route path="/" component={HomePage} />
      {routes}
    </Router>
  )
}