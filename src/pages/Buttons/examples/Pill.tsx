import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Pill.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Pill() {
  return (
    <Mie.View>
      <Mie.Button pilled label="Pilled" />
      <Mie.Button pilled label="Accent" accent />
      <Mie.Button pilled label="Success" accent="success" />
      <Mie.Button pilled label="Warning" accent="warning" />
      <Mie.Button pilled label="Error" accent="error" />
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
<button class="mie button pilled">Pilled</button>
<button class="mie button pilled accent">Accent</button>
<button class="mie button pilled success">Success</button>
<button class="mie button pilled warning">Warning</button>
<button class="mie button pilled error">Error</button>
`.trim()

export default Object.assign(Pill, {
  title: "Pill",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})