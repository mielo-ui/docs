import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Accent() {
  return (
    <Mie.L.View f fc sbv="large">
      <Mie.L.Entry
        message="Error message"
        placeholder="Username"
        value="Sample text"
        name="accent-1"
        type="text"
        r

        accent
      />

      <Mie.L.Entry
        message="Error message"
        placeholder="Username"
        value="Sample text"
        name="accent-2"
        type="text"
        r

        accent="error"
      />

      <Mie.L.Entry
        message="Warning message"
        placeholder="Username"
        value="Sample text"
        name="accent-3"
        type="text"
        r

        accent="warning"
      />

      <Mie.L.Entry
        message="Success message"
        placeholder="Username"
        value="Sample text"
        name="accent-4"
        type="text"
        r
        
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