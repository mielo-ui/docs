import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

import rawPropsCode from "../../../../../node_modules/@mielo-ui/mielo-react/src/containers/Activatable/Props.ts?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Default() {
  return (
    <Mie.L.View f f1 fc gr="big">
      <Mie.L.View bg="panel" f1 f p="massive" r>
        <Mie.Header title="Background" subtitle="Panel" inverted />
      </Mie.L.View>
      <Mie.L.View bg="windows" f1 f p="massive" r>
        <Mie.Header title="Background" subtitle="Window" inverted />
      </Mie.L.View>
      <Mie.L.View bg="content" f1 f p="massive" r>
        <Mie.Header title="Background" subtitle="Content" inverted />
      </Mie.L.View>
      <Mie.L.View bg="osd" f1 f p="massive" r>
        <Mie.Header title="Background" subtitle="Osd" inverted />
      </Mie.L.View>
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
    props: rawPropsCode,
    html: rawHtmlCode,
  },
})