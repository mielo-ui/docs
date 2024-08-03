import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Accent() {
  return (
    <Mie.L.View f fc sbv="large">
      <Mie.Item
        description="Custom text item description"
        title="Accent"
        accent
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
      />
      <Mie.Item
        description="Custom text item description"
        title="Success"
        accent="success"
      />
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