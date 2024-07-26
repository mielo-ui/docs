import { useState } from "react"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Default() {
  const [username, setUsername] = useState("")
  return (
    <Mie.View>
      <Mie.L.Entry
        placeholder="Username"
        onChange={text => setUsername(text)}
        value={username}
        name="username"
        type="text"
        r="large"
      />
    </Mie.View>
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