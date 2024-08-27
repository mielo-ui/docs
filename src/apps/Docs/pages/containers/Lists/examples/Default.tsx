import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

import rawPropsCode from "@mielo-ui/mielo-react/src/containers/List/Props.ts?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Default() {
  return (
    <Mie.L.List>
      <Mie.L.List.Item
        title="Some text..."
        activatable
        ph="small"
        pv="tiny"
        r
      />
      <Mie.L.List.Item
        title="Some text..."
        activatable
        ph="small"
        pv="tiny"
        r
      />
      <Mie.L.List.Item
        title="Some text..."
        activatable
        ph="small"
        pv="tiny"
        r
      />
    </Mie.L.List>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie list">
  <div class="mie item list activatable">
    <div class="content">
      <div class="title">Some text...</div>
    </div>
  </div>
  <div class="mie item list activatable">
    <div class="content">
      <div class="title">Some text...</div>
    </div>
  </div>
  <div class="mie item list activatable">
    <div class="content">
      <div class="title">Some text...</div>
    </div>
  </div>
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