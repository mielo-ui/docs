import whiteframe from "../../../../../../images/whiteframe.png"
import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Rounded.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Rounded() {
  return (
    <Mie.L.View f fr gc="large" fai="center" pv="large">
      <Mie.L.Image r="small" size="tiny" src={whiteframe} />
      <Mie.L.Image r size="tiny" src={whiteframe} />
      <Mie.L.Image r="large" size="tiny" src={whiteframe} />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Rounded, {
  title: "Rounded",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})