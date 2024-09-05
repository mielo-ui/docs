import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Tertiary.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Tertiary() {
  return (
    <Mie.L.View f fr fw p fai="center" fjc="center" g>
      <Mie.Button label="Transparent" tertiary />
      <Mie.Button label="Accent" tertiary accent />
      <Mie.Button label="Success" tertiary accent="success" />
      <Mie.Button label="Warning" tertiary accent="warning" />
      <Mie.Button label="Error" tertiary accent="error" />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<button class="mie button tertiary accent">Accent</button>
<button class="mie button tertiary success">Success</button>
<button class="mie button tertiary warning">Warning</button>
<button class="mie button tertiary error">Error</button>
`.trim()

export default Object.assign(Tertiary, {
  title: "Tertiary",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})