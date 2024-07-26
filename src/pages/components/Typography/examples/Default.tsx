import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Default() {
  return (
    <Mie.Header subtitle="Example of big header" title="Union Header" center />
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie header center">
  <div class="heading">
    <div class="title">Union Header</div>
    <div class="subtitle">Example of big header</div>
  </div>
</div>
`.trim()

export default Object.assign(Default, {
  description: "For full description open Header component docs",
  title: "Stack Header",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})