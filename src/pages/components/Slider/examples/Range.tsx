import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Range.tsx?raw"

//@chunk
import { RangeSlider } from "@mielo-ui/mielo-react-slider"
import { useState } from "react"

function Range() {
  const [value, setValue] = useState({
    max: 30,
    min: 60,
  })

  return (
    <RangeSlider
      onChange={nextValue => setValue(nextValue)}
      value={value}
      step={1}
      max={100}
      min={0}
    />
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