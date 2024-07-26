import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Accent() {
  return (
    <Mie.L.View f fc f1 sbv="large">
      <Mie.Progress accent>
        <Mie.Progress.Bar progress={40} />
      </Mie.Progress>

      <Mie.Progress accent="warning">
        <Mie.Progress.Bar accent="warning" progress={60} />
      </Mie.Progress>

      <Mie.Progress accent="error">
        <Mie.Progress.Bar accent="error" progress={60} />
      </Mie.Progress>

      <Mie.Progress accent="success">
        <Mie.Progress.Bar accent="success" progress={60} />
      </Mie.Progress>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie progress accent">
  <div style="width: 40%" class="mie progress-bar accent">
    <div class="label">40%</div>
  </div>
</div>

<div class="mie progress warning">
  <div style="width: 60%" class="mie progress-bar warning">
    <div class="label">60%</div>
  </div>
</div>

<div class="mie progress error">
  <div style="width: 60%" class="mie progress-bar error">
    <div class="label">60%</div>
  </div>
</div>

<div class="mie progress success">
  <div style="width: 60%" class="mie progress-bar success">
    <div class="label">60%</div>
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