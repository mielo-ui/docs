import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Accent() {
  return (
    <Mie.L.View f f1 fc fjc="center" fai="center" sbv="small">
      <Mie.Text accent>Accent</Mie.Text>
      <Mie.Text accent="success">Success</Mie.Text>
      <Mie.Text accent="warning">Warning</Mie.Text>
      <Mie.Text accent="error">Error</Mie.Text>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<div className="mie text accent">Accent</div>
<div className="mie text success">Success</div>
<div className="mie text warning">Warning</div>
<div className="mie text error">Error</div>
`.trim()

export default Object.assign(Accent, {
  title: "Accent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})