import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

import rawPropsCode from "../../../../../node_modules/@mielo-ui/mielo-react/src/components/Progress/Props.ts?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Default() {
  return (
    <Mie.L.View f fc f1 sbv="large">
      <Mie.Progress>
        <Mie.Progress.Bar progress={35} />
      </Mie.Progress>

      <Mie.Progress>
        <Mie.Progress.Bar progress={65} progressVisible />
      </Mie.Progress>
    </Mie.L.View>
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
    props: rawPropsCode,
    html: rawHtmlCode,
  },
})