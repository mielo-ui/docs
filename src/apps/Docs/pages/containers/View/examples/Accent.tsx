import { capitalCase } from "change-case"
import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Accent() {
  const accents = [true, "warning", "error", "success"].map((accent, _idx) => (
    <Mie.L.View
      accent={accent as Mie.CoreAccent}
      key={`view-${accent}`}
      p="massive"
      bordered
      f1
      f
      r
    >
      <Mie.Header
        title={capitalCase(accent === true ? "Accent" : accent.toString())}
        inverted
      />
    </Mie.L.View>
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
    <Mie.L.View
      color={color as Mie.CoreColor}
      key={`view-${idx}`}
      p="massive"
      bordered
      f1
      f
      r
    >
      <Mie.Header title={capitalCase(color)} inverted />
    </Mie.L.View>
  ))

  return (
    <Mie.L.View f fc f1 gr="massive" pt="massive">
      <Mie.L.View f fc g="small">
        {accents}
      </Mie.L.View>

      <Mie.L.Header
        subtitle="Colored variant allowed for all components"
        title="Colored"
        size="small"
        center
      />

      <Mie.L.View f fc g="small">
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