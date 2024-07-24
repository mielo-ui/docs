import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Background.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Background() {
  return (
    <Mie.View>
      <Mie.L.Icon
        icon={<Mie.Icons.DialogInformation />}
        p="large"
        r="large"
        accent
        bg
      />

      <Mie.L.Icon
        icon={<Mie.Icons.DialogWarning />}
        p="large"
        r="large"
        accent="warning"
        bg
      />

      <Mie.L.Icon
        icon={<Mie.Icons.DialogError />}
        p="large"
        r="large"
        accent="error"
        bg
      />

      <Mie.L.Icon
        icon={<Mie.Icons.EmblemOk />}
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