import { useState } from "react"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Select.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Select() {
  const [time, setTime] = useState({
    label: "Day",
    value: "day",
  })

  const options = [
    {
      label: "Morning",
      value: "morning",
    },
    {
      label: "Day",
      value: "day",
    },
    {
      label: "Night",
      value: "night",
    },
  ]

  return (
    <Mie.L.Rows shadow>
      <Mie.Rows.Select
        onChange={option => setTime(option)}
        label="Time"
        options={options}
        value={time}
        name="time"
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