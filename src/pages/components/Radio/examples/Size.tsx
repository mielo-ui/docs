import { capitalCase } from "change-case"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

function Size() {
  const options = ["small", "default", "large"]
  const [option, setOption] = useState("default")

  const radio = options.map(accent => {
    const props: Mie.RadioProps = {
      id: `radio-basic-${accent}`,
      name: "radio-basic",
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

export default Object.assign(Size, {
  title: "Size",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})