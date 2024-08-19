import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import { Slider, SliderAccent, SliderColor } from "@mielo-ui/mielo-react-slider"
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

function Accent() {
  const [value, setValue] = useState(50)

  const accents = [true, "warning", "error", "success"].map((accent, idx) => (
    <Slider
      onChange={nextValue => setValue(nextValue)}
      key={`accent-${accent}-${idx}`}
      accent={accent as SliderAccent}
      value={value}
      max={100}
      min={0}
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
    <Slider
      onChange={nextValue => setValue(nextValue)}
      color={color as SliderColor}
      key={`color-${color}-${idx}`}
      value={value}
      max={100}
      min={0}
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