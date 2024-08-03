import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Size() {
  return (
    <Mie.L.View f fc sbv="large">
      <Mie.L.Entry
        message="Small entry message"
        placeholder="Field name"
        value="Small entry size"
        name="username-s-1"
        size="small"
        type="text"
        r
        accent="error"
      />

      <Mie.L.Entry
        message="Default medium entry message"
        placeholder="Field name"
        value="Defailt entry size"
        name="username-s-2"
        type="text"
        r
        accent="warning"
      />

      <Mie.L.Entry
        message="Large entry message"
        placeholder="Field name"
        value="Large entry size"
        name="username-s-3"
        size="large"
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

export default Object.assign(Size, {
  title: "Size",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})