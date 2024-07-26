import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Circular.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Circular() {
  return (
    <Mie.L.View f fc sbv="large">
      <Mie.Checkbox name="checkbox-default-1" label="Default" circular />

      <Mie.Checkbox
        name="checkbox-default-2"
        label="Default Checked"
        circular
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

export default Object.assign(Circular, {
  title: "Circular",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})