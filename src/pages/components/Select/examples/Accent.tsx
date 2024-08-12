import { useState } from "react"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Accent() {
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
    <Mie.L.View f fc sbv="large">
      <Mie.Select
        onChange={setTime}
        options={options}
        value={time}
        label="Time"
        name="accent-1"
        accent
      />

      <Mie.Select
        onChange={setTime}
        options={options}
        value={time}
        label="Time"
        name="accent-2"
        accent="warning"
      />

      <Mie.Select
        onChange={setTime}
        options={options}
        value={time}
        label="Time"
        name="accent-3"
        accent="error"
      />

      <Mie.Select
        onChange={setTime}
        options={options}
        value={time}
        label="Time"
        name="accent-4"
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