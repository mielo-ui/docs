import { useState } from "react"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Entry.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Entry() {
  const [username, setUsername] = useState("")
  return (
    <Mie.L.Rows shadow r>
      <Mie.L.Rows.Entry
        placeholder="Username"
        onChange={event => setUsername(event.target.value)}
        value={username}
        name="username"
        type="text"
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

export default Object.assign(Entry, {
  title: "Entry",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})