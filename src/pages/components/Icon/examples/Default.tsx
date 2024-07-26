import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Icons from "adwaita-symbolic-icons-react"
import * as Mie from "mielo-react"

function Default() {
  return (
    <Mie.View>
      <Mie.Icon size="big" icon={<Icons.Places.UserHome />} />
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie icon big">
  <svg />
</div>
`.trim()

export default Object.assign(Default, {
  title: "Default",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})