import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

function Accent() {
  const [username, setUsername] = useState("")

  const defaultProps = {
    onChange: event => setUsername(event.target.value),
    placeholder: "Enter Username",
    label: "Username",
    value: username,
    type: "text",
    r: true,
  }

  return (
    <Mie.L.View f fc sbv="large">
      <Mie.L.Entry {...defaultProps} name="accent-1" accent />
      <Mie.L.Entry {...defaultProps} name="accent-2" accent="error" />
      <Mie.L.Entry {...defaultProps} name="accent-3" accent="warning" />
      <Mie.L.Entry {...defaultProps} name="accent-4" accent="success" />
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