import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Center.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Center() {
  return (
    <Mie.View>
      <Mie.Header
        icon={<Mie.Icon icon={<Icons.Places.UserHome />} />}
        subtitle="Subtitle of icon header"
        title="Icon Header"
        size="large"
      />
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie header center">
  <div class="heading">
    <div class="mie icon">
      <svg>
    </div>
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>
`.trim()

export default Object.assign(Center, {
  title: "Center",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})