import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Background.tsx?raw"

//@chunk
import * as Icons from "adwaita-symbolic-icons-react"
import * as Mie from "mielo-react"

function Background() {
  return (
    <Mie.View>
      <Mie.L.Icon
        icon={<Icons.Status.DialogInformation />}
        p="large"
        r="large"
        accent
        bg
      />

      <Mie.L.Icon
        icon={<Icons.Status.DialogWarning />}
        p="large"
        r="large"
        accent="warning"
        bg
      />

      <Mie.L.Icon
        icon={<Icons.Status.DialogError />}
        p="large"
        r="large"
        accent="error"
        bg
      />

      <Mie.L.Icon
        icon={<Icons.Emblems.EmblemOk />}
        p="large"
        r="large"
        accent="success"
        bg
      />
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie icon big accent space-large bg">
  <svg>
</div>

<div class="mie icon big warning space-large bg">
  <svg>
</div>

<div class="mie icon big error space-large bg">
  <svg>
</div>

<div class="mie icon big success space-large bg">
  <svg>
</div>
`.trim()

export default Object.assign(Background, {
  title: "Background",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})