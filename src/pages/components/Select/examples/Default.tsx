import { useState } from "react"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Default() {
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
    <Mie.Select
      onChange={option => setTime(option)}
      options={options}
      label="Time"
      value={time}
      name="time"
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