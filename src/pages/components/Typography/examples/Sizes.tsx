import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Sizes.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Sizes() {
  return (
    <Mie.L.View f fc sbv="large" fai="center">
      <Mie.Header title="Title 1" size="tiny" />
      <Mie.Header title="Title 2" size="small" />
      <Mie.Header title="Title 3" />
      <Mie.Header title="Title 4" size="large" />
      <Mie.Header title="Title 5" size="big" />
      <Mie.Header title="Title 6" size="huge" />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<h1 className="mie title">Title 1</h1>
<h2 className="mie title">Title 2</h2>
<h3 className="mie title">Title 3</h3>
<h4 className="mie title">Title 4</h4>
<h5 className="mie title">Title 5</h5>
<h6 className="mie title">Title 6</h6>
`.trim()

export default Object.assign(Sizes, {
  title: "Sizes",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})