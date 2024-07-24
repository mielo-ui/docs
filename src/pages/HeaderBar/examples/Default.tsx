import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Default() {
  return (
    <Mie.L.View>
      <Mie.L.HeaderBar
        header={<Mie.Header title="Title" subtitle="Subtitle" />}
        left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
        right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
        r
      />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Default, {
  title: "Default",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})