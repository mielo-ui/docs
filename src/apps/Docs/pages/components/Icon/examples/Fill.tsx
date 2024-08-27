import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Fill.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Fill() {
  return (
    <Mie.L.View f fr gc="large">
      <Mie.L.Icon
        icon={<Icons.Status.DialogInformation />}
        size="large"
        accent
        filled
        p
        r
      />
      <Mie.L.Icon
        icon={<Icons.Status.DialogWarning />}
        accent="warning"
        size="large"
        filled
        p
        r
      />
      <Mie.L.Icon
        icon={<Icons.Status.DialogError />}
        accent="error"
        size="large"
        filled
        p
        r
      />
      <Mie.L.Icon
        icon={<Icons.Emblems.EmblemOk />}
        accent="success"
        size="large"
        filled
        p
        r
      />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Fill, {
  title: "Fill",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})