import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Icon.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Icon() {
  return (
    <Mie.L.View f fc gr="large">
      <Mie.Header
        title="Icon Header"
        subtitle="Subtitle of icon header"
        icon={<Mie.Icon icon={<Icons.Places.UserHome />} />}
      />

      <Mie.Header
        title="Icon Header"
        subtitle="Subtitle of icon header"
        icon={<Mie.Icon icon={<Icons.Places.UserHome />} />}
        iconSided
      />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie header">
  <div class="heading">
    <div class="mie icon">
      <svg>
    </div>

    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="mie header">
  <div class="mie icon">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>
`.trim()

export default Object.assign(Icon, {
  title: "Icon",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})