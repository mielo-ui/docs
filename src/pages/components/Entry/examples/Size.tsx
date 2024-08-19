import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

function Size() {
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
    <Mie.L.View f fc gr="large">
      <Mie.L.Entry
        {...defaultProps}
        name="rounded-2"
        size="small"
        accent="warning"
      />
      <Mie.L.Entry {...defaultProps} name="rounded-4" accent="error" />
      <Mie.L.Entry
        {...defaultProps}
        name="rounded-4"
        size="large"
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

export default Object.assign(Size, {
  title: "Size",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})