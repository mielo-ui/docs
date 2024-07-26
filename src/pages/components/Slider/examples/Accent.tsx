import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import { Slider } from "mielo-react-slider"
import * as Mie from "mielo-react"
import { useState } from "react"

function Accent() {
  const [value, setValue] = useState(50)

  return (
    <Mie.L.View f fc sbv="large">
      <Slider
        onChange={nextValue => setValue(nextValue)}
        accent="warning"
        value={value}
        max={100}
        min={0}
      />

      <Slider
        onChange={nextValue => setValue(nextValue)}
        accent="error"
        value={value}
        max={100}
        min={0}
      />

      <Slider
        onChange={nextValue => setValue(nextValue)}
        accent="success"
        value={value}
        max={100}
        min={0}
      />
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