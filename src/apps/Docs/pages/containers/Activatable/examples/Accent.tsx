import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Accent() {
  return (
    <Mie.L.View f fr fai="center" fjc="center" gc="large" pt="massive">
      <Mie.L.View fc f sbv>
        <Mie.L.Activatable accent ph="large" pv="small" r>
          <Mie.L.Item title="Item Layer" description="Welcome text" center />
        </Mie.L.Activatable>
        <Mie.L.Activatable accent="warning" ph="large" pv="small" r>
          <Mie.L.Item title="Item Layer" description="Welcome text" center />
        </Mie.L.Activatable>
        <Mie.L.Activatable accent="error" ph="large" pv="small" r>
          <Mie.L.Item title="Item Layer" description="Welcome text" center />
        </Mie.L.Activatable>
        <Mie.L.Activatable accent="success" ph="large" pv="small" r>
          <Mie.L.Item title="Item Layer" description="Welcome text" center />
        </Mie.L.Activatable>
      </Mie.L.View>

      <Mie.L.View fc f sbv>
        <Mie.L.Activatable accent ph="large" pv="small" r active>
          <Mie.L.Item title="Item Layer" description="Welcome text" center />
        </Mie.L.Activatable>
        <Mie.L.Activatable accent="warning" ph="large" pv="small" r active>
          <Mie.L.Item title="Item Layer" description="Welcome text" center />
        </Mie.L.Activatable>
        <Mie.L.Activatable accent="error" ph="large" pv="small" r active>
          <Mie.L.Item title="Item Layer" description="Welcome text" center />
        </Mie.L.Activatable>
        <Mie.L.Activatable accent="success" ph="large" pv="small" r active>
          <Mie.L.Item title="Item Layer" description="Welcome text" center />
        </Mie.L.Activatable>
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