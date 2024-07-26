import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Default() {
  return (
    <Mie.View>
      <Mie.Button label="Button" />
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie button">
  Button
</div>
`.trim()

export default Object.assign(Default, {
  title: "Default",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})