import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

import rawPropsCode from "@mielo-ui/mielo-react/src/components/Label/Props.ts?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Default() {
  return (
    <Mie.L.View f fc gr="large">
      <Mie.Label>Label</Mie.Label>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Default, {
  title: "Default",
  code: {
    ts: tsFormatSample(rawTsCode),
    props: rawPropsCode,
    html: rawHtmlCode,
  },
})