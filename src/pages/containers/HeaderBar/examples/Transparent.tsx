import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Transparent.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Transparent() {
  return (
    <Mie.L.View f f1>
      <Mie.L.HeaderBar
        header={<Mie.Header title="Title" subtitle="Subtitle" />}
        transparent
        r
        left={
          <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserHome />} />} />
        }
        right={
          <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserTrash />} />} />
        }
      />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Transparent, {
  title: "Transparent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})