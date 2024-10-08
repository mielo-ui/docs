import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import rawPropsCode from "@mielo-ui/mielo-react/src/containers/Rows/Props.ts?raw"
import * as Mie from "@mielo-ui/mielo-react"

function Default() {
  return (
    <Mie.L.View f fc f1 pt="massive">
      <Mie.L.Rows shadow r>
        <Mie.L.Rows.Row rt />
        <Mie.L.Rows.Row />
        <Mie.L.Rows.Row rb />
      </Mie.L.Rows>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie rows">
  <div class="mie item row property">
    <div class="content"></div>
  </div>

  <div class="mie item row property">
    <div class="content"></div>
  </div>

  <div class="mie item row property">
    <div class="content"></div>
  </div>
</div>
`.trim()

export default Object.assign(Default, {
  title: "Default",
  code: {
    ts: tsFormatSample(rawTsCode),
    props: rawPropsCode,
    html: rawHtmlCode,
  },
})