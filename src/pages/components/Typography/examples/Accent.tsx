import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import { capitalCase } from "change-case"
import * as Mie from "@mielo-ui/mielo-react"

function Accent() {
  const accents = [true, "warning", "error", "success"].map((accent, idx) => (
    <Mie.Text key={`accent-${accent}-${idx}`} accent={accent as Mie.TextAccent}>
      {capitalCase(accent === true ? "Accent" : accent.toString())}
    </Mie.Text>
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
    <Mie.Text key={`color-${color}-${idx}`} color={color as Mie.TextColor}>
      {capitalCase(color)}
    </Mie.Text>
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
<div className="mie text accent">Accent</div>
<div className="mie text success">Success</div>
<div className="mie text warning">Warning</div>
<div className="mie text error">Error</div>
`.trim()

export default Object.assign(Accent, {
  title: "Accent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})