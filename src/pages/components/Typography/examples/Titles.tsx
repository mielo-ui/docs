import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Titles.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Titles() {
  return (
    <Mie.L.View f fc sbv="large" fai="center">
      <h1 className="mie text title">Title 1</h1>
      <h2 className="mie text title">Title 2</h2>
      <h3 className="mie text title">Title 3</h3>
      <h4 className="mie text title">Title 4</h4>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<h1 className="mie text title">Title 1</h1>
<h2 className="mie text title">Title 2</h2>
<h3 className="mie text title">Title 3</h3>
<h4 className="mie text title">Title 4</h4>
`.trim()

export default Object.assign(Titles, {
  title: "Titles",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})