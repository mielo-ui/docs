import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Size() {
  return (
    <Mie.L.View f fc sbv="large">
      <Mie.Checkbox
        name="circular-accent-2"
        label="Small"
        accent="error"
        size="small"
        checked
        toggle
      />

      <Mie.Checkbox
        name="circular-accent-3"
        label="Medium"
        accent="success"
        checked
        toggle
      />

      <Mie.Checkbox
        name="circular-accent-1"
        accent="warning"
        label="Large"
        size="large"
        checked
        toggle
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