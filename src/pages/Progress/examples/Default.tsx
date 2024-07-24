import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Default() {
  return (
    <Mie.View>
      <Mie.Progress>
        <Mie.Progress.Bar progress={35} />
      </Mie.Progress>

      <Mie.Progress>
        <Mie.Progress.Bar progress={65} progressVisible />
      </Mie.Progress>
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie progress">
  <div style="width: 35%" class="mie progress-bar">
    <div class="label">35%</div>
  </div>
</div>

<div class="mie progress">
  <div style="width: 65%" class="mie progress-bar">
    <div class="label visible">65%</div>
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