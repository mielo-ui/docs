import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Mie from "mielo-react"
import { useState } from "react"

function Default() {
  const [tab, setTab] = useState("tab-1")

  return (
    <Mie.View f f1 fjc="center" fai="center">
      <Mie.Tabs
        onChange={setTab}
        selected={tab}
        animated
        tabs={[
          {
            title: "Tab 1",
            name: "tab-1",
          },
          {
            title: "Tab 2",
            name: "tab-2",
          },
          {
            title: "Tab Long Title",
            name: "tab-3",
          },
        ]}
      />
    </Mie.View>
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
    html: rawHtmlCode,
  },
})