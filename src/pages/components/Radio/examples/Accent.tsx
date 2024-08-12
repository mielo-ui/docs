import { capitalCase } from "change-case"
import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

function Accent() {
  const options = ["default", "warning", "error", "success"]
  const [option, setOption] = useState("default")

  const radio = options.map(accent => {
    const props: Mie.RadioProps = {
      id: `radio-accent-${accent}`,
      name: "radio-accent",
      value: accent,

      onChange: event => setOption(event.target.value),
      accent: accent !== "default" && (accent as any),
      children: capitalCase(accent),
      defaultChecked: accent === option,
    }

    return <Mie.Radio key={`radio-${accent}`} {...props} />
  })

  return (
    <Mie.L.View f fc sbv="large">
      {radio}
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