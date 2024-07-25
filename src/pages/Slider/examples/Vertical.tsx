import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Range.tsx?raw"

//@chunk
import { Slider, RangeSlider } from "mielo-react-slider"
import * as Mie from "mielo-react"
import { useState } from "react"

function Range() {
  const [first, setFirst] = useState(50)
  const [second, setSecond] = useState({
    max: 30,
    min: 60,
  })

  return (
    <Mie.L.View f fc>
      <Slider
        onChange={nextValue => setFirst(nextValue)}
        orientation="vertical"
        value={first}
        max={100}
        min={0}
      />

      <RangeSlider
        onChange={nextValue => setSecond(nextValue)}
        orientation="vertical"
        value={second}
        step={1}
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

export default Object.assign(Range, {
  title: "Range",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})