import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Inverted.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Inverted() {
  return (
    <Mie.View>
      <Mie.Header
        subtitle="Subtitle of medium header"
        title="Medium Header"
        inverted
      />
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie header inverted">
  <div class="heading">
    <div class="title">Medium Header</div>
    <div class="subtitle">Subtitle of medium header</div>
  </div>
</div>
`.trim()

export default Object.assign(Inverted, {
  title: "Inverted",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})