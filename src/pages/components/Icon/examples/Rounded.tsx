import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Rounded.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Rounded() {
  return (
    <Mie.L.View f fr gc="large" fai="center">
      <Mie.L.Icon
        icon={<Icons.Status.DialogInformation />}
        size="big"
        p="large"
        accent
        bg
        r="tiny"
      />

      <Mie.L.Icon
        icon={<Icons.Status.DialogWarning />}
        accent="warning"
        size="big"
        p="large"
        bg
        r="small"
      />

      <Mie.L.Icon
        icon={<Icons.Status.DialogError />}
        accent="error"
        size="big"
        p="large"
        bg
        r
      />

      <Mie.L.Icon
        icon={<Mie.Icons.EmblemOk />}
        accent="success"
        size="big"
        p="large"
        bg
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