import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Default() {
  return (
    <Mie.View>
      <Mie.Radio name="checkbox-default-1" label="Default" />

      <Mie.Radio name="checkbox-default-2" label="Default Checked" checked />
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Default, {
  title: "Default",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})