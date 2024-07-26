import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Accent() {
  return (
    <Mie.L.Rows r>
      <Mie.L.Rows.Row rt accent="warning" />
      <Mie.L.Rows.Row accent="error" />
      <Mie.L.Rows.Row rb accent="success" />
    </Mie.L.Rows>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie rows">
  <div class="mie item row property warning">
    <div class="content"></div>
  </div>

  <div class="mie item row property error">
    <div class="content"></div>
  </div>

  <div class="mie item row property success">
    <div class="content"></div>
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