import { useState } from "react"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Rounded.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Rounded() {
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
      <Mie.L.Select
        message="Some accent status"
        onChange={setTime}
        options={options}
        name="rounded-1"
        value={time}
        label="Time"
        accent
        r="none"
      />

      <Mie.L.Select
        message="Some warning status"
        onChange={setTime}
        options={options}
        name="rounded-2"
        accent="warning"
        label="Time"
        value={time}
        r="small"
      />

      <Mie.L.Select
        message="Some error status"
        onChange={setTime}
        options={options}
        name="rounded-3"
        accent="error"
        label="Times"
        value={time}
        r
      />

      <Mie.L.Select
        message="Some error status"
        onChange={setTime}
        options={options}
        name="rounded-3"
        accent="success"
        label="Times"
        value={time}
        r="large"
      />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Rounded, {
  title: "Rounded",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})