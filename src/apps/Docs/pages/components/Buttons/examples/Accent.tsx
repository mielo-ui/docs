import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"
import { capitalCase } from "change-case"

function Accent() {
  const accents = [true, "warning", "error", "success"].map((accent, idx) => (
    <Mie.Button
      label={capitalCase(accent === true ? "Accent" : accent.toString())}
      accent={accent as Mie.CoreAccent}
      key={`btn-${idx}-${accent}`}
    />
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
    <Mie.Button
      color={color as Mie.CoreColor}
      key={`btn-${idx}-${color}`}
      label={capitalCase(color)}
    />
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
<button class="mie button accent">Accent</button>
<button class="mie button success">Success</button>
<button class="mie button warning">Warning</button>
<button class="mie button error">Error</button>

<button class="mie button blue">Blue</button>
<button class="mie button green">Green</button>
<button class="mie button yellow">Yellow</button>
<button class="mie button orange">Orange</button>
<button class="mie button red">Red</button>
<button class="mie button purple">Purple</button>
<button class="mie button brown">Brown</button>
<button class="mie button pink">Pink</button>
<button class="mie button deeppurple">Deeppurple</button>
<button class="mie button indigo">Indigo</button>
<button class="mie button lightgreen">Lightgreen</button>
<button class="mie button deeporange">Deeporange</button>
<button class="mie button light">Light</button>
<button class="mie button dark">Dark</button>
`.trim()

export default Object.assign(Accent, {
  title: "Accent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})