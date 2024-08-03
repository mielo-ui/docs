import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

import rawPropsCode from "../../../../../node_modules/@mielo-ui/mielo-react/src/components/Text/Props.ts?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Default() {
  return (
    <Mie.L.View f fc>
      <Mie.Header
        subtitle="Example of big header"
        title="Union Header"
        center
      />

      <Mie.L.Text mt="large" accent>
        Text Base
      </Mie.L.Text>
    </Mie.L.View>
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

<div class="mie header center">
  Text Base
</div>
`.trim()

export default Object.assign(Default, {
  description: "For full description open Header component docs",
  title: "Stack Header",
  code: {
    ts: tsFormatSample(rawTsCode),
    props: rawPropsCode,
    html: rawHtmlCode,
  },
})