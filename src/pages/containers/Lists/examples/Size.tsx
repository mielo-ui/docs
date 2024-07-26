import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Size() {
  return (
    <Mie.List>
      <Mie.L.List.Item
        description="Lorem ipsum description"
        title="Small Title"
        accent="warning"
        size="small"
        activatable

        pv="small"
        ph
        r
      />

      <Mie.L.List.Item
        description="Lorem ipsum description"
        title="Default Title"
        accent="error"
        activatable

        ph="large"
        pv
        r
      />

      <Mie.L.List.Item
        description="Lorem ipsum description"
        title="Large Title"
        accent="success"
        size="large"
        activatable
        pv="large"
        ph="big"
        r
      />
    </Mie.List>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie list">
  <div class="mie item warning small list warning activatable">
    <div class="content">
      <div class="title">Small Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
  <div class="mie item error list error activatable">
    <div class="content">
      <div class="title">Default Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
  <div class="mie item success large list success activatable">
    <div class="content">
      <div class="title">Large Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
</div>
`.trim()

export default Object.assign(Size, {
  title: "Size",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})