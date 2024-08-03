import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Bordered.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Bordered() {
  return (
    <Mie.L.View f fr fai="center" sbh="large">
      <Mie.Label bordered transparent accent>
        Label
      </Mie.Label>
      <Mie.Label bordered transparent accent="warning">
        Label
      </Mie.Label>
      <Mie.Label bordered transparent accent="error">
        Label
      </Mie.Label>
      <Mie.Label bordered transparent accent="success">
        Label
      </Mie.Label>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Bordered, {
  title: "Bordered",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})