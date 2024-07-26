import { useState } from "react"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Accent() {
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
    <Mie.L.View f fc sbv="large">
      <Mie.Select
        onChange={setTime}
        options={options}
        value={time}
        label="Time"
        name="accent-1"
        message="Some warning status"
        accent
      />

      <Mie.Select
        onChange={setTime}
        options={options}
        value={time}
        label="Time"
        name="accent-2"
        message="Some warning status"
        accent="warning"
      />

      <Mie.Select
        onChange={setTime}
        options={options}
        value={time}
        label="Time"
        name="accent-3"
        message="Some error status"
        accent="error"
      />

      <Mie.Select
        onChange={setTime}
        options={options}
        value={time}
        label="Time"
        name="accent-4"
        message="Some success status"
        accent="success"
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