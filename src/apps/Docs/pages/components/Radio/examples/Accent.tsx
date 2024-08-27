import { capitalCase } from "change-case"
import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

function Accent() {
  const [option, setOption] = useState<string | boolean>(true)

  const accents = [true, "warning", "error", "success"].map((accent, _idx) => {
    const props: Mie.RadioProps = {
      id: `accent-${accent}`,
      name: "radio-accent",
      value: accent as any,

      children: capitalCase(accent === true ? "Accent" : accent.toString()),
      onChange: event => setOption(event.target.value),
      accent: accent !== "default" && (accent as any),
      defaultChecked: accent === option,
    }

    return <Mie.Radio key={`radio-${accent}`} {...props} />
  })

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
  ].map((color, _idx) => {
    const props: Mie.RadioProps = {
      id: `accent-${color}`,
      name: "radio-accent",
      value: color as any,

      children: capitalCase(color),
      onChange: event => setOption(event.target.value),
      color: color as Mie.CoreColor,
      defaultChecked: color === option,
    }

    return <Mie.Radio key={`radio-${color}`} {...props} />
  })

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