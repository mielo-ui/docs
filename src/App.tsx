import { useSelector } from "react-redux"
import * as Mie from "mielo-react"

import { DocsHeaderbar, DocsSidebar } from "./containers"
import * as selectors from "./selectors"
import { Routes } from "./Routes"

function App() {
  const darkThemeEnable = useSelector(selectors.darkThemeEnable)

  return (
    <Mie.SplitView theme={darkThemeEnable ? "dark" : "light"}>
      <DocsSidebar />

      <Mie.SplitView.Content headerbar={<DocsHeaderbar />}>
        <Routes />
      </Mie.SplitView.Content>
    </Mie.SplitView>
  )
}

export default App