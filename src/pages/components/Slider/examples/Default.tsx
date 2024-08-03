import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import { Slider } from "@mielo-ui/mielo-react-slider"
import { useState } from "react"

function Default() {
  const [value, setValue] = useState(50)

  return (
    <Slider
      onChange={nextValue => setValue(nextValue)}
      value={value}
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

export default Object.assign(Default, {
  title: "Default",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})