import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Default() {
  return (
    <Mie.L.List>
      <Mie.L.List.Item title="Some text..." activatable ph="large" pv r />
      <Mie.L.List.Item title="Some text..." activatable ph="large" pv r />
      <Mie.L.List.Item title="Some text..." activatable ph="large" pv r />
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
    html: rawHtmlCode,
  },
})