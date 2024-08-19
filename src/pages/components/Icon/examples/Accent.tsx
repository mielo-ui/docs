import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

// prettier-ignore
function Accent() {
  const accents = [true, "warning", "error", "success"].map((accent, idx) => {
    const Icon = Object.values(Icons.Places)[idx + 3]
    
    return (
      <Mie.L.Icon
        accent={accent as Mie.IconAccent}
        key={`icon-${idx}-${accent}`}
        icon={<Icon />}
        size="big"
      />
    )
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
  ].map((color, idx) => {
    const Icon = Object.values(Icons.Places)[idx + 3]
    
    return (
      <Mie.L.Icon
        color={color as Mie.IconColor}
        key={`icon-${idx}-${color}`}
        size="big"

        icon={<Icon />}
      />
    )
  })

  return (
    <Mie.L.View f fc gr="massive" ph="massive">
      <Mie.L.View f fr fw fai="center" fjc="center" g>
        {accents}
      </Mie.L.View>

      <Mie.L.Header
        subtitle="Colored variant allowed for all components"
        title="Colored"
        size="small"
        center
      />

      <Mie.L.View f fr fw fai="center" fjc="center" g>
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