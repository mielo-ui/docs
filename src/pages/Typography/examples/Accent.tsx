import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Accent() {
  return (
    <Mie.View>
      <Mie.Text accent>Accent</Mie.Text>
      <Mie.Text accent="success">Success</Mie.Text>
      <Mie.Text accent="warning">Warning</Mie.Text>
      <Mie.Text accent="error">Error</Mie.Text>
    </Mie.View>
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