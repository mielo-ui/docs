import { useState } from "react"

import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Size() {
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
    <Mie.View>
      <Mie.Select
        message="Some accent status"
        onChange={setTime}
        options={options}
        value={time}
        name="size-1"
        label="Time"
        accent
        size="small"
      />

      <Mie.Select
        message="Some warning status"
        onChange={setTime}
        options={options}
        value={time}
        name="size-2"
        label="Time"
        accent="warning"
      />

      <Mie.Select
        message="Some error status"
        onChange={setTime}
        options={options}
        value={time}
        label="Times"
        name="size-3"
        accent="error"
        size="large"
      />
    </Mie.View>
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