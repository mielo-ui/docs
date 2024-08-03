import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Size() {
  return (
    <Mie.L.View f fc sbv="large" fai="start">
      <Mie.Radio
        name="circular-accent-1"
        label="Large"
        accent="warning"
        size="large"
        checked
      />

      <Mie.Radio
        name="circular-accent-3"
        label="Medium"
        accent="success"
        checked
      />

      <Mie.Radio
        name="circular-accent-2"
        label="Small"
        accent="error"
        size="small"
        checked
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