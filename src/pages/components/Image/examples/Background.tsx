import whiteframe from "../../../../images/whiteframe.png"
import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Background.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Background() {
  return (
    <Mie.L.View f fc fai="center">
      <Mie.L.Image
        style={{ backgroundSize: "contain" }}
        src={whiteframe}
        container
        bordered
        r="large"
        f
      >
        <Mie.L.View p="massive" f f1 fai="center" fjc="center">
          <Mie.L.Button m="huge" ph="big" filled accent pilled label="Button" />
        </Mie.L.View>
      </Mie.L.Image>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Background, {
  title: "Background",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})