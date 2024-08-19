import { capitalCase } from "change-case"
import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Accent() {
  const accents = [true, "warning", "error", "success"].map((accent, idx) => (
    <Mie.Label
      children={capitalCase(accent === true ? "Accent" : accent.toString())}
      accent={accent as Mie.LabelAccent}
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
    <Mie.Label
      children={capitalCase(color)}
      color={color as Mie.LabelColor}
      key={`btn-${idx}-${color}`}
    />
  ))

  return (
    <Mie.L.View f fc gr="massive">
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
// Without HTML
// Only React component
`.trim()

export default Object.assign(Accent, {
  title: "Accent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})