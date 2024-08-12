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
    <Mie.L.View f fc sbv="large">
      <Mie.Select
        onChange={setTime}
        options={options}
        value={time}
        name="size-1"
        label="Time"
        accent
        size="small"
      />

      <Mie.Select
        onChange={setTime}
        options={options}
        value={time}
        name="size-2"
        label="Time"
        accent="warning"
      />

      <Mie.Select
        onChange={setTime}
        options={options}
        value={time}
        label="Times"
        name="size-3"
        accent="error"
        size="large"
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