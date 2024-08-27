import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Size() {
  return (
    <Mie.L.View f fc f1 gr="large">
      <Mie.Progress size="small">
        <Mie.Progress.Bar progress={40} />
      </Mie.Progress>

      <Mie.Progress>
        <Mie.Progress.Bar progress={60} />
      </Mie.Progress>

      <Mie.Progress size="large">
        <Mie.Progress.Bar progress={80} />
      </Mie.Progress>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie progress small">
  <div style="width: 40%" class="mie progress-bar">
    <div class="label">40%</div>
  </div>
</div>

<div class="mie progress">
  <div style="width: 60%" class="mie progress-bar">
    <div class="label">60%</div>
  </div>
</div>

<div class="mie progress large">
  <div style="width: 80%" class="mie progress-bar">
    <div class="label">80%</div>
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