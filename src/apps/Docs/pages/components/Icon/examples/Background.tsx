import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Background.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Background() {
  return (
    <Mie.L.View f fr gc="large">
      <Mie.L.Icon
        icon={<Icons.Status.DialogInformation />}
        p="large"
        r="large"
        accent
        bg
      />

      <Mie.L.Icon
        icon={<Icons.Status.DialogWarning />}
        p="large"
        r="large"
        accent="warning"
        bg
      />

      <Mie.L.Icon
        icon={<Icons.Status.DialogError />}
        p="large"
        r="large"
        accent="error"
        bg
      />

      <Mie.L.Icon
        icon={<Icons.Emblems.EmblemOk />}
        p="large"
        r="large"
        accent="success"
        bg
      />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Background, {
  title: "Background",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})