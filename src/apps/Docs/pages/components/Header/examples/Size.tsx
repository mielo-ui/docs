import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Size() {
  return (
    <Mie.L.View f fc gr="massive" pv="large">
      <Mie.Header
        title="Tiny Title"
        subtitle="Subtitle text"
        icon={<Mie.Icon size="tiny" icon={<Icons.Places.UserHome />} />}
        center
        size="tiny"
      />

      <Mie.Header
        title="Small Title"
        subtitle="Subtitle text"
        icon={<Mie.Icon size="small" icon={<Icons.Places.UserHome />} />}
        center
        size="small"
      />

      <Mie.Header
        title="Medium Title"
        subtitle="Subtitle text"
        icon={<Mie.Icon icon={<Icons.Places.UserHome />} />}
        center
      />

      <Mie.Header
        title="Large Title"
        subtitle="Subtitle text"
        icon={<Mie.Icon size="large" icon={<Icons.Places.UserHome />} />}
        center
        size="large"
      />

      <Mie.Header
        title="Big Title"
        subtitle="Subtitle text"
        icon={<Mie.Icon size="big" icon={<Icons.Places.UserHome />} />}
        center
        size="big"
      />

      <Mie.Header
        title="Huge Title"
        subtitle="Subtitle text"
        icon={<Mie.Icon size="huge" icon={<Icons.Places.UserHome />} />}
        center
        size="huge"
      />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie header size tiny">
  <div class="mie icon tiny">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="mie header size small">
  <div class="mie icon small">
    <svg>
  </div>

  <div class="heading">
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

<div class="mie header size large">
  <div class="mie icon large">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="mie header size big">
  <div class="mie icon big">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="mie header size huge">
  <div class="mie icon huge">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="mie header size massive">
  <div class="mie icon massive">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>
`.trim()

export default Object.assign(Size, {
  title: "Size",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})