import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Titles.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Titles() {
  return (
    <Mie.View>
      <h1 className="mie text title">Title 1</h1>
      <h2 className="mie text title">Title 2</h2>
      <h3 className="mie text title">Title 3</h3>
      <h4 className="mie text title">Title 4</h4>
    </Mie.View>
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