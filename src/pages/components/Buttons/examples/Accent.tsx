import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Accent() {
  return (
    <Mie.L.View f fr sbh="large">
      <Mie.Button label="Accent" accent />
      <Mie.Button label="Warning" accent="warning" />
      <Mie.Button label="Error" accent="error" />
      <Mie.Button label="Success" accent="success" />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<button class="mie button accent">Accent</button>
<button class="mie button success">Success</button>
<button class="mie button warning">Warning</button>
<button class="mie button error">Error</button>
`.trim()

export default Object.assign(Accent, {
  title: "Accent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})