import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Accent() {
  return (
    <Mie.L.View f f1 fc gr="big">
      <Mie.L.View accent f1 f p="massive" r>
        <Mie.Header title="Accent" inverted />
      </Mie.L.View>
      <Mie.L.View accent="warning" f1 f p="massive" r>
        <Mie.Header title="Accent" subtitle="warning" inverted />
      </Mie.L.View>
      <Mie.L.View accent="error" f1 f p="massive" r>
        <Mie.Header title="Accent" subtitle="error" inverted />
      </Mie.L.View>
      <Mie.L.View accent="success" f1 f p="massive" r>
        <Mie.Header title="Accent" subtitle="success" inverted />
      </Mie.L.View>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Accent, {
  title: "Accent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})