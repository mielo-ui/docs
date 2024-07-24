import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Default() {
  return (
    <Mie.L.View>
      <Mie.L.View className="sample" justifyContent="center" column flex1 flex>
        <div className="mie view padding flex column rounded"></div>
        <div className="mie view view-bg container-bg padding flex column rounded"></div>
        <div className="mie view container-bg padding flex column rounded"></div>
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