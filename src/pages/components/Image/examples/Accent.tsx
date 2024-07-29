import whiteframe from "../../../../images/whiteframe.png"
import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

// prettier-ignore
function Accent() {
  return (
    <Mie.L.View f fr sbh="large">
      <Mie.L.Image circular bordered accent r size="tiny" src={whiteframe} />
      <Mie.L.Image circular bordered accent="warning" r size="tiny" src={whiteframe} />
      <Mie.L.Image circular bordered accent="error" r size="tiny" src={whiteframe} />
      <Mie.L.Image circular bordered accent="success" r size="tiny" src={whiteframe} />
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