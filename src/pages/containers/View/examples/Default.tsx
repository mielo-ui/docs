import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Default() {
  return (
    <Mie.L.View>
      <Mie.L.View className="sample" fjc="center" fc f1 f>
        <div className="mie view padding f fc rounded"></div>
        <div className="mie view view-bg container-bg padding f fc rounded"></div>
        <div className="mie view container-bg padding f fc rounded"></div>
      </Mie.L.View>
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
    html: rawHtmlCode,
  },
})