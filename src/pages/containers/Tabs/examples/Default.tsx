import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

import rawPropsCode from "../../../../../node_modules/@mielo-ui/mielo-react/src/containers/Tabs/Props.ts?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

function Default() {
  const [tab, setTab] = useState("tab-1")

  return (
    <Mie.L.View f f1 fjc="center" fai="center">
      <Mie.Tabs
        onChange={setTab}
        selected={tab}
        animated
        tabs={[
          {
            title: "Basic",
            name: "tab-1",
          },
          {
            title: "Interactive",
            name: "tab-2",
          },
          {
            title: "Custom",
            name: "tab-3",
          },
        ]}
      />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie tabs">
  <div class="mie tab active">Tab 1</div>
  <div class="mie tab">Tab 2</div>
  <div class="mie tab">Tab Long Title</div>
</div>
`.trim()

export default Object.assign(Default, {
  title: "Default",
  code: {
    ts: tsFormatSample(rawTsCode),
    props: rawPropsCode,
    html: rawHtmlCode,
  },
})