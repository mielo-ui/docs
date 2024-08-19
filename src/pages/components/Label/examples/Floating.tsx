import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Floating.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Floating() {
  return (
    <Mie.L.View f fc gr="small">
      <Mie.L.Item
        label={
          <Mie.Label size="small" floating>
            +100
          </Mie.Label>
        }
        title="Labeled Item"
        activatable
        pv="tiny"
        hover
        ph
        r
      />

      <Mie.L.Item
        label={
          <Mie.Label size="small" accent="success" floating="ftl">
            top left
          </Mie.Label>
        }
        title="Floating Label"
        activatable
        pv="tiny"
        hover
        ph
        r
      />

      <Mie.L.Item
        label={
          <Mie.Label size="small" accent="error" circular floating></Mie.Label>
        }
        title="Labeled Item"
        activatable
        pv="tiny"
        hover
        ph
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

export default Object.assign(Floating, {
  title: "Floating",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})