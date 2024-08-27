import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Rounded.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

function Rounded() {
  const [username, setUsername] = useState("")

  const defaultProps = {
    onChange: event => setUsername(event.target.value),
    placeholder: "Enter Username",
    label: "Username",
    value: username,
    type: "text",
  }

  return (
    <Mie.L.View f fc gr="large" pt="massive">
      <Mie.L.Entry {...defaultProps} name="rounded-1" accent r="none" />
      <Mie.L.Entry
        {...defaultProps}
        name="rounded-2"
        accent="warning"
        r="tiny"
      />
      <Mie.L.Entry {...defaultProps} name="rounded-4" accent="error" r />
      <Mie.L.Entry
        {...defaultProps}
        name="rounded-4"
        accent="success"
        r="large"
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