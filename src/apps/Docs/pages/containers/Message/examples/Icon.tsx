import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Icon.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Icon() {
  return (
    <Mie.L.View f fc f1 pt="big">
      <Mie.Message
        title="With description"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        icon={<Mie.Icon size="large" icon={<Mie.Icons.EmblemOk />} />}
        onClose={() => {}}
      />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Icon, {
  title: "Icon",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})