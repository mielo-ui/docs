import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Multiple.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Multiple() {
  return (
    <Mie.L.View f fc f1 sbv="large">
      <Mie.Progress multiple>
        <Mie.Progress.Bar accent="error" progress={25} />
        <Mie.Progress.Bar accent="warning" progress={18} />
        <Mie.Progress.Bar accent="success" progress={40} />
      </Mie.Progress>

      <Mie.Progress multiple>
        <Mie.Progress.Bar progressVisible accent="error" progress={30} />
        <Mie.Progress.Bar progressVisible accent="warning" progress={20} />
        <Mie.Progress.Bar progressVisible accent="success" progress={15} />
      </Mie.Progress>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie progress multiple">
  <div style="width: 25%" class="mie progress-bar error">
    <div class="label">25%</div>
  </div>

  <div style="width: 18%" class="mie progress-bar warning">
    <div class="label">18%</div>
  </div>

  <div style="width: 40%" class="mie progress-bar success">
    <div class="label">40%</div>
  </div>
</div>

<div class="mie progress multiple">
  <div style="width: 30%" class="mie progress-bar error">
    <div class="label visible">30%</div>
  </div>

  <div style="width: 20%" class="mie progress-bar warning">
    <div class="label visible">20%</div>
  </div>

  <div style="width: 15%" class="mie progress-bar success">
    <div class="label visible">15%</div>
  </div>
</div>
`.trim()

export default Object.assign(Multiple, {
  title: "Multiple",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})