import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Size() {
  return (
    <Mie.View>
      <Mie.Header
        title="Icon Header"
        subtitle="Subtitle of icon header"
        icon={<Mie.Icon size="tiny" icon={<Mie.Icons.UserHome />} />}
        iconSided
        size="tiny"
      />

      <Mie.Header
        title="Icon Header"
        subtitle="Subtitle of icon header"
        icon={<Mie.Icon size="small" icon={<Mie.Icons.UserHome />} />}
        iconSided
        size="small"
      />

      <Mie.Header
        title="Icon Header"
        subtitle="Subtitle of icon header"
        icon={<Mie.Icon icon={<Mie.Icons.UserHome />} />}
        iconSided
      />

      <Mie.Header
        title="Icon Header"
        subtitle="Subtitle of icon header"
        icon={<Mie.Icon size="large" icon={<Mie.Icons.UserHome />} />}
        iconSided
        size="large"
      />

      <Mie.Header
        title="Icon Header"
        subtitle="Subtitle of icon header"
        icon={<Mie.Icon size="big" icon={<Mie.Icons.UserHome />} />}
        iconSided
        size="big"
      />

      <Mie.Header
        title="Icon Header"
        subtitle="Subtitle of icon header"
        icon={<Mie.Icon size="huge" icon={<Mie.Icons.UserHome />} />}
        iconSided
        size="huge"
      />

      <Mie.Header
        title="Icon Header"
        subtitle="Subtitle of icon header"
        icon={<Mie.Icon size="massive" icon={<Mie.Icons.UserHome />} />}
        iconSided
        size="massive"
      />
    </Mie.View>
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