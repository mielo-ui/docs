import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Fill.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Fill() {
  return (
    <Mie.L.View f fr fw p fai="center" fjc="center" g>
      <Mie.Button label="Accent" filled accent />
      <Mie.Button label="Success" filled accent="success" />
      <Mie.Button label="Warning" filled accent="warning" />
      <Mie.Button label="Error" filled accent="error" />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<button class="mie button filled accent">Accent</button>
<button class="mie button filled success">Success</button>
<button class="mie button filled warning">Warning</button>
<button class="mie button filled error">Error</button>
`.trim()

export default Object.assign(Fill, {
  title: "Fill",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})