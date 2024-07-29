import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Accent() {
  return (
    <Mie.L.View f fr sbh="large">
      <Mie.Label accent>Label</Mie.Label>
      <Mie.Label accent="warning">Label</Mie.Label>
      <Mie.Label accent="error">Label</Mie.Label>
      <Mie.Label accent="success">Label</Mie.Label>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Accent, {
  title: "Accent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})