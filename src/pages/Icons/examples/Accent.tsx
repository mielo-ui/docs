import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Icons from "adwaita-symbolic-icons-react"
import * as Mie from "mielo-react"

// prettier-ignore
function Accent() {
  return (
    <Mie.View>
      <Mie.Icon
        icon={<Icons.Status.DialogInformation />}
        size="big"
        accent
      />

      <Mie.Icon
        icon={<Icons.Status.DialogWarning />}
        accent="warning"
        size="big"
      />

      <Mie.Icon
        icon={<Icons.Status.DialogError />}
        accent="error"
        size="big"
      />

      <Mie.Icon
        icon={<Mie.Icons.EmblemOk />}
        accent="success"
        size="big"
      />
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie icon big accent">
  <svg>
</div>

<div class="mie icon big warning">
  <svg>
</div>

<div class="mie icon big error">
  <svg>
</div>

<div class="mie icon big success">
  <svg>
</div>
`.trim()

export default Object.assign(Accent, {
  title: "Accent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})