import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Icons from "adwaita-symbolic-icons-react"
import * as Mie from "mielo-react"

// prettier-ignore
function Accent() {
  return (
    <Mie.L.View f fr sbh="large">
      <Mie.Icon
        icon={<Icons.Status.DialogInformation />}
        size="big"
        accent
      />

      <Mie.Icon
        icon={<Icons.Status.DialogWarning />}
        accent="warning"
        size="big"
      />

      <Mie.Icon
        icon={<Icons.Status.DialogError />}
        accent="error"
        size="big"
      />

      <Mie.Icon
        icon={<Mie.Icons.EmblemOk />}
        accent="success"
        size="big"
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