import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Accent() {
  return (
    <Mie.View>
      <Mie.Entry
        message="Error message"
        placeholder="Username"
        value="Sample text"
        name="accent-1"
        type="text"
        accent
      />

      <Mie.Entry
        message="Error message"
        placeholder="Username"
        value="Sample text"
        name="accent-2"
        type="text"
        accent="error"
      />

      <Mie.Entry
        message="Warning message"
        placeholder="Username"
        value="Sample text"
        name="accent-3"
        type="text"
        accent="warning"
      />

      <Mie.Entry
        message="Success message"
        placeholder="Username"
        value="Sample text"
        name="accent-4"
        type="text"
        accent="success"
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