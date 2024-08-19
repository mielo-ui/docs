import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"
import { capitalCase } from "change-case"
import { useState } from "react"

function Accent() {
  const [username, setUsername] = useState("")

  const defaultProps: any = {
    onChange: event => setUsername(event.target.value),
    placeholder: "Enter Username",
    value: username,
    type: "text",
    r: "large",
  }

  const accents = [true, "warning", "error", "success"].map((accent, idx) => (
    <Mie.L.Entry
      {...defaultProps}
      label={`Username (${accent ? "Accent" : capitalCase(accent.toString())})`}
      accent={accent as Mie.ButtonAccent}
      key={`btn-${idx}-${accent}`}
      name={`accent-${accent}`}
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
    <Mie.L.Entry
      {...defaultProps}
      label={`Username (${capitalCase(color)})`}
      color={color as Mie.ButtonColor}
      key={`btn-${idx}-${color}`}
      name={`color-${color}`}
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