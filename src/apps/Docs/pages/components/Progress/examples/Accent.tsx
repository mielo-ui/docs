import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Accent() {
  const accents = [true, "warning", "error", "success"].map((accent, idx) => (
    <Mie.Progress
      key={`accent-${idx}-${accent}`}
      accent={accent as Mie.CoreAccent}
    >
      <Mie.Progress.Bar accent={accent as Mie.CoreAccent} progress={60} />
    </Mie.Progress>
  ))

  const colors = [
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
    "purple",
    "brown",
    "pink",
    "deeppurple",
    "indigo",
    "lightgreen",
    "deeporange",
    "light",
    "dark",
  ].map((color, idx) => (
    <Mie.Progress key={`color-${idx}-${color}`} color={color as Mie.CoreColor}>
      <Mie.Progress.Bar color={color as Mie.CoreColor} progress={60} />
    </Mie.Progress>
  ))

  return (
    <Mie.L.View f fc gr="massive" pt="massive">
      <Mie.L.View f fr fw fai="center" fjc="center" g="small">
        {accents}
      </Mie.L.View>

      <Mie.L.Header
        subtitle="Colored variant allowed for all components"
        title="Colored"
        size="small"
        center
      />

      <Mie.L.View f fr fw fai="center" fjc="center" g="small">
        {colors}
      </Mie.L.View>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie progress accent">
  <div style="width: 40%" class="mie progress-bar accent">
    <div class="label">40%</div>
  </div>
</div>

<div class="mie progress warning">
  <div style="width: 60%" class="mie progress-bar warning">
    <div class="label">60%</div>
  </div>
</div>

<div class="mie progress error">
  <div style="width: 60%" class="mie progress-bar error">
    <div class="label">60%</div>
  </div>
</div>

<div class="mie progress success">
  <div style="width: 60%" class="mie progress-bar success">
    <div class="label">60%</div>
  </div>
</div>
`.trim()

export default Object.assign(Accent, {
  title: "Accent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})