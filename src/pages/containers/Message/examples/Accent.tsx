import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Accent() {
  return (
    <Mie.View>
      <Mie.Message
        title="With description"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        onClose={() => {}}
        accent
      />
      <Mie.Message
        title="With description"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        onClose={() => {}}
        accent="warning"
      />
      <Mie.Message
        title="With description"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        onClose={() => {}}
        accent="error"
      />
      <Mie.Message
        title="With description"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        onClose={() => {}}
        accent="success"
      />
    </Mie.View>
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