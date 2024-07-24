import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Fill.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Fill() {
  return (
    <Mie.View>
      <Mie.Button label="Filled" filled />
      <Mie.Button label="Accent" filled accent />
      <Mie.Button label="Success" filled accent="success" />
      <Mie.Button label="Warning" filled accent="warning" />
      <Mie.Button label="Error" filled accent="error" />
    </Mie.View>
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