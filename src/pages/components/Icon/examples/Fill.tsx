import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Fill.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Fill() {
  return (
    <Mie.L.View f fr sbh="large">
      <Mie.L.Icon
        icon={<Icons.Status.DialogInformation />}
        p="large"
        size="big"
        accent
        filled
        r
      />
      <Mie.L.Icon
        icon={<Icons.Status.DialogWarning />}
        accent="warning"
        p="large"
        size="big"
        filled
        r
      />
      <Mie.L.Icon
        icon={<Icons.Status.DialogError />}
        accent="error"
        p="large"
        size="big"
        filled
        r
      />
      <Mie.L.Icon
        icon={<Icons.Emblems.EmblemOk />}
        accent="success"
        p="large"
        size="big"
        filled
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