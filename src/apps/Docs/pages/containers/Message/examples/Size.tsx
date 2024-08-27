import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Size() {
  return (
    <Mie.L.View f fc pt="big">
      <Mie.Message
        title="Message Title"
        description="Message description text..."
        size="tiny"
      />

      <Mie.Message
        title="Message Title"
        description="Message description text..."
        size="small"
      />

      <Mie.Message
        title="Message Title"
        description="Message description text..."
      />

      <Mie.Message
        title="Message Title"
        description="Message description text..."
        size="large"
      />

      <Mie.Message
        title="Message Title"
        description="Message description text..."
        size="big"
      />

      <Mie.Message
        title="Message Title"
        description="Message description text..."
        size="huge"
      />

      <Mie.Message
        title="Message Title"
        description="Message description text..."
        size="massive"
      />
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