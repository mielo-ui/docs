import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Icons from "adwaita-symbolic-icons-react"
import * as Mie from "mielo-react"

function Size() {
  return (
    <Mie.L.View f fr sbh="large">
      <Mie.Icon icon={<Icons.Places.UserHome />} size="mini" />
      <Mie.Icon icon={<Icons.Places.UserHome />} size="tiny" />
      <Mie.Icon icon={<Icons.Places.UserHome />} size="small" />
      <Mie.Icon icon={<Icons.Places.UserHome />} />
      <Mie.Icon icon={<Icons.Places.UserHome />} size="large" />
      <Mie.Icon icon={<Icons.Places.UserHome />} size="big" />
      <Mie.Icon icon={<Icons.Places.UserHome />} size="huge" />
      <Mie.Icon icon={<Icons.Places.UserHome />} size="massive" />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Size, {
  title: "Size",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})