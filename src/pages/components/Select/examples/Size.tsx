import { useState } from "react"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Size() {
  const [time, setTime] = useState<Mie.OptionValue>({
    title: "Day",
    value: "day",
  })

  const options = [
    {
      title: "Morning",
      value: "morning",
    },
    {
      title: "Day",
      value: "day",
    },
    {
      title: "Night",
      value: "night",
    },
  ]

  return (
    <Mie.L.View f fc fai="center" gr="large">
      <Mie.Select
        onChange={setTime}
        options={options}
        value={time}
        name="size-1"
        label="Time"
        accent
        size="small"
        // By default with size changed text & indicators, base indents - dont resize
        // You can use Layout clases like ph="large" for styling
        // default width - calculated from select button size
        // this width - is minimal simulation
        style={{ width: "12rem" }}
      />

      <Mie.Select
        onChange={setTime}
        options={options}
        value={time}
        name="size-2"
        label="Time"
        accent="warning"
        style={{ width: "15rem" }}
      />

      <Mie.Select
        onChange={setTime}
        options={options}
        value={time}
        label="Times"
        name="size-3"
        accent="error"
        size="large"
        style={{ width: "18rem" }}
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