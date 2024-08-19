import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Transparent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Transparent() {
  return (
    <Mie.L.View f fr fw p fai="center" fjc="center" g>
      <Mie.Button label="Transparent" transparent />
      <Mie.Button label="Accent" transparent accent />
      <Mie.Button label="Success" transparent accent="success" />
      <Mie.Button label="Warning" transparent accent="warning" />
      <Mie.Button label="Error" transparent accent="error" />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<button class="mie button accent transparent">Accent</button>
<button class="mie button success transparent">Success</button>
<button class="mie button warning transparent">Warning</button>
<button class="mie button error transparent">Error</button>
`.trim()

export default Object.assign(Transparent, {
  title: "Transparent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})