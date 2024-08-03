import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Size() {
  return (
    <Mie.L.View f fc sbv="large">
      <Mie.Item
        description="Custom text item description"
        title="Accent"
        accent
        size="small"
      />
      <Mie.Item
        description="Custom text item description"
        title="Warning"
        accent="warning"
      />
      <Mie.Item
        description="Custom text item description"
        title="Error"
        accent="error"
        size="large"
      />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `

`.trim()

export default Object.assign(Size, {
  title: "Size",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})