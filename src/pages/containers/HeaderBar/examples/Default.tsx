import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Icons from "adwaita-symbolic-icons-react"
import * as Mie from "mielo-react"

function Default() {
  return (
    <Mie.L.View>
      <Mie.L.HeaderBar
        header={<Mie.Header title="Title" subtitle="Subtitle" />}
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

export default Object.assign(Default, {
  title: "Default",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})