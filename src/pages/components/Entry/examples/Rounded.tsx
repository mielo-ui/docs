import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Rounded.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Rounded() {
  return (
    <Mie.L.View f fc sbv="large">
      <Mie.Entry
        placeholder="Field name"
        value="Some value"
        message="Message"
        name="username-s-1"
        type="text"
        accent
      />

      <Mie.L.Entry
        placeholder="Field name"
        value="Some value"
        message="Message"
        name="username-s-3"
        type="text"
        r="small"
        accent="warning"
      />

      <Mie.L.Entry
        placeholder="Field name"
        value="Some value"
        message="Message"
        name="username-s-2"
        type="text"
        r
        accent="error"
      />

      <Mie.L.Entry
        placeholder="Field name"
        value="Some value"
        message="Message"
        name="username-s-3"
        type="text"
        r="large"
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

export default Object.assign(Rounded, {
  title: "Rounded",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})