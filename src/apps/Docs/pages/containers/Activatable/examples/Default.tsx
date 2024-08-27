import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

import rawPropsCode from "@mielo-ui/mielo-react/src/containers/Activatable/Props.ts?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Default() {
  return (
    <Mie.L.View f fc>
      <Mie.L.Activatable accent p="small" r>
        <Mie.L.Item title="Item Layer" description="Welcome text" accent />
      </Mie.L.Activatable>

      <Mie.L.Item
        center
        title="Item"
        description="Description text"
        activatable
        p="small"
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
    props: rawPropsCode,
    html: rawHtmlCode,
  },
})