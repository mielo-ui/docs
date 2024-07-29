import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Size() {
  return (
    <Mie.L.View f fr fai="center" sbh="large">
      <Mie.Label size="tiny">Tiny</Mie.Label>
      <Mie.Label size="small">Small</Mie.Label>
      <Mie.Label size="medium">Medium</Mie.Label>
      <Mie.Label size="large">Large</Mie.Label>
      <Mie.Label size="big">Big</Mie.Label>
      <Mie.Label size="huge">Huge</Mie.Label>
      <Mie.Label size="massive">Massive</Mie.Label>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Size, {
  title: "Size",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})