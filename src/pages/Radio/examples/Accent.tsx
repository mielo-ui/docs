import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Accent() {
  return (
    <Mie.View>
      <Mie.Radio
        name="circular-accent-1"
        label="Warning"
        accent="warning"
        checked
      />

      <Mie.Radio
        name="circular-accent-2"
        label="Success"
        accent="success"
        checked
      />

      <Mie.Radio
        name="circular-accent-3"
        label="Error"
        accent="error"
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

export default Object.assign(Accent, {
  title: "Accent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})