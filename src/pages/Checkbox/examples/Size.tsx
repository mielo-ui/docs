import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Size() {
  return (
    <Mie.View>
      <Mie.Checkbox
        name="circular-accent-2"
        label="Small"
        accent="error"
        size="small"
        checked
      />

      <Mie.Checkbox
        name="circular-accent-3"
        label="Medium"
        accent="success"
        checked
      />

      <Mie.Checkbox
        name="circular-accent-1"
        label="Large"
        accent="warning"
        size="large"
        checked
      />
    </Mie.View>
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