import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

import rawPropsCode from "../../../../../node_modules/@mielo-ui/mielo-react/src/components/Header/Props.ts?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Default() {
  return (
    <Mie.Header title="Union Header" subtitle="Subtitle of default header" />
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie header">
  <div class="heading">
    <div class="title">Union Header</div>
    <div class="subtitle">Example of big header</div>
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