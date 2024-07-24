import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Tertiary.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Tertiary() {
  return (
    <Mie.View>
      <Mie.Button label="Transparent" tertiary transparent />
      <Mie.Button label="Accent" tertiary transparent accent />
      <Mie.Button label="Success" tertiary transparent accent="success" />
      <Mie.Button label="Warning" tertiary transparent accent="warning" />
      <Mie.Button label="Error" tertiary transparent accent="error" />
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
<button class="mie button tertiary accent transparent">Accent</button>
<button class="mie button tertiary success transparent">Success</button>
<button class="mie button tertiary warning transparent">Warning</button>
<button class="mie button tertiary error transparent">Error</button>
`.trim()

export default Object.assign(Tertiary, {
  title: "Tertiary",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})