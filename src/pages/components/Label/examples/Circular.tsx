import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Circular.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Circular() {
  return (
    <Mie.L.View f fr fai="center" sbh="large">
      <Mie.L.View f fr fai="center" sbh="small">
        <Mie.Label circular accent>
          10
        </Mie.Label>
        <Mie.Label circular accent="warning">
          15
        </Mie.Label>
        <Mie.Label circular accent="error">
          20
        </Mie.Label>
        <Mie.Label circular accent="success">
          25
        </Mie.Label>
      </Mie.L.View>

      <Mie.L.View f fr fai="center" sbh="small">
        <Mie.Label size="small" circular accent="warning"></Mie.Label>
        <Mie.Label circular accent="error"></Mie.Label>
        <Mie.Label size="large" circular accent="success"></Mie.Label>
        <Mie.Label size="big" circular accent></Mie.Label>
      </Mie.L.View>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Circular, {
  title: "Circular",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})