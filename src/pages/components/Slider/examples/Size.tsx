import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import { Slider } from "@mielo-ui/mielo-react-slider"
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

function Size() {
  const [value, setValue] = useState(50)

  return (
    <Mie.L.View f fc gr="large">
      <Slider
        onChange={nextValue => setValue(nextValue)}
        accent="warning"
        size="small"
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
        size="large"
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

export default Object.assign(Size, {
  title: "Size",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})