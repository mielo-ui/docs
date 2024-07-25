import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Fill.tsx?raw"

//@chunk
import * as Icons from "adwaita-symbolic-icons-react"
import * as Mie from "mielo-react"

function Fill() {
  return (
    <Mie.View>
      <Mie.L.Icon
        icon={<Icons.Status.DialogInformation />}
        p="large"
        size="big"
        accent
        filled
      />
      <Mie.L.Icon
        icon={<Icons.Status.DialogWarning />}
        accent="warning"
        p="large"
        size="big"
        filled
      />
      <Mie.L.Icon
        icon={<Icons.Status.DialogError />}
        accent="error"
        p="large"
        size="big"
        filled
      />
      <Mie.L.Icon
        icon={<Icons.Emblems.EmblemOk />}
        accent="success"
        p="large"
        size="big"
        filled
      />
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie icon big accent space-large filled">
  <svg>
</div>

<div class="mie icon big warning space-large filled">
  <svg>
</div>

<div class="mie icon big error space-large filled">
  <svg>
</div>

<div class="mie icon big success space-large filled">
  <svg>
</div>
`.trim()

export default Object.assign(Fill, {
  title: "Fill",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})