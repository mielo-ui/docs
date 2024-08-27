import { useState } from "react"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

import rawPropsCode from "@mielo-ui/mielo-react/src/components/Entry/Props.ts?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Default() {
  const [username, setUsername] = useState("")

  return (
    <Mie.View>
      <Mie.L.Entry
        onChange={event => setUsername(event.target.value)}
        placeholder="Enter username"
        label="Username"
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
    props: rawPropsCode,
    html: rawHtmlCode,
  },
})