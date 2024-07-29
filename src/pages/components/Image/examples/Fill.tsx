import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Fill.tsx?raw"

//@chunk
import * as Icons from "adwaita-symbolic-icons-react"
import * as Mie from "mielo-react"

function Fill() {
  return <Mie.L.View f fr sbh="large"></Mie.L.View>
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Fill, {
  title: "Fill",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})