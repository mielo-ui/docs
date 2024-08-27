import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Vertical.tsx?raw"

//@chunk
import { Slider, RangeSlider } from "@mielo-ui/mielo-react-slider"
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

function Vertical() {
  const [first, setFirst] = useState(50)
  const [second, setSecond] = useState({
    max: 30,
    min: 60,
  })

  return (
    <Mie.L.View f fr g="massive" fjc="center">
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

export default Object.assign(Vertical, {
  title: "Vertical",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})