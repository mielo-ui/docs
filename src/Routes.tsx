import { Router, Route } from "wouter"
import * as Components from "./pages"
import * as Demos from "./demo"

export function Routes() {
  return (
    <Router>
      {/* Components */}
      <Route path="typography" component={Components.TypographyPage} />
      <Route path="header" component={Components.HeaderPage} />
      <Route path="headerbar" component={Components.HeaderBarPage} />
      <Route path="checkbox" component={Components.CheckboxPage} />
      <Route path="toggle" component={Components.TogglePage} />
      <Route path="radio" component={Components.RadioPage} />
      <Route path="select" component={Components.SelectPage} />
      <Route path="slider" component={Components.SliderPage} />
      <Route path="progress" component={Components.ProgressPage} />
      <Route path="item" component={Components.ItemPage} />
      <Route path="button" component={Components.ButtonPage} />
      <Route path="dialog" component={Components.DialogPage} />
      <Route path="message" component={Components.MessagePage} />
      <Route path="notify" component={Components.NotifyPage} />
      <Route path="entry" component={Components.EntryPage} />
      <Route path="list" component={Components.ListPage} />
      <Route path="card" component={Components.CardPage} />
      <Route path="row" component={Components.RowPage} />
      <Route path="tab" component={Components.TabPage} />
      <Route path="icons" component={Components.IconsPage} />

      {/* Demo */}
      <Route path="basic" component={Demos.BasicDemoPage} />
      <Route path="extended" component={Demos.ExtendedDemoPage} />
    </Router>
  )
}