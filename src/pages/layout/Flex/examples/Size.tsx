import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Size() {
  return (
    <Mie.L.View f fc sbv="large">

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