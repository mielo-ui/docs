import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Accent() {
  return (
    <Mie.List>
      <Mie.List.Item
        accent="warning"
        title="Title"
        description="Lorem ipsum description"
        activatable
      />
      <Mie.List.Item
        accent="error"
        title="Title"
        description="Lorem ipsum description"
        activatable
      />
      <Mie.List.Item
        accent="success"
        title="Title"
        description="Lorem ipsum description"
        activatable
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