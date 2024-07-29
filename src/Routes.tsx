import { Router, Route } from "wouter"
import { ReactNode } from "react"
import * as pages from "./pages"
import { DocsPage } from "./Docs"

const { entries } = Object

export function Routes() {
  const routes = entries(pages).reduce((routes, [group, components]) => {
    for (const [page, Component] of entries(components)) {
      const name = page.replace("Page", "").toLowerCase()

      routes.push(<Route key={name} path={name} component={Component} />)
    }

    return routes
  }, [] as ReactNode[])

  return (
    <Router>
      <Route path="/" component={DocsPage} />
      {routes}
    </Router>
  )
}