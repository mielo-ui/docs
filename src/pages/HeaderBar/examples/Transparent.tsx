import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Transparent.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Transparent() {
  return (
    <Mie.View>
      <Mie.L.HeaderBar
        header={<Mie.Header title="Title" subtitle="Subtitle" />}
        left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
        right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
        transparent
        r
      />
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Transparent, {
  title: "Transparent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})