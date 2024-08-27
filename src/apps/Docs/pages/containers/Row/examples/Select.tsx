import { useState } from "react"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Select.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Select() {
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
    <Mie.L.Rows shadow r>
      <Mie.L.Rows.Select
        onChange={option => setTime(option)}
        label="Time"
        options={options}
        value={time}
        name="time"
        r
      />
    </Mie.L.Rows>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Select, {
  title: "Select",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})