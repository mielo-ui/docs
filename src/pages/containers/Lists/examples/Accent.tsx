import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Accent() {
  return (
    <Mie.List>
      <Mie.L.List.Item
        description="Lorem ipsum description"
        accent="warning"
        title="Title"
        activatable
        ph="small"
        pv="tiny"
        r
      />
      <Mie.L.List.Item
        description="Lorem ipsum description"
        accent="error"
        title="Title"
        activatable
        ph="small"
        pv="tiny"
        r
      />
      <Mie.L.List.Item
        description="Lorem ipsum description"
        accent="success"
        title="Title"
        activatable
        ph="small"
        pv="tiny"
        r
      />
    </Mie.List>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie list">
  <div class="mie item warning list warning activatable">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
  <div class="mie item error list error activatable">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
  <div class="mie item success list success activatable">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
</div>
`.trim()

export default Object.assign(Accent, {
  title: "Accent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})