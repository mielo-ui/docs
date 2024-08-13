import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Size() {
  return (
    <Mie.L.View f fc sbv="large" fai="center">
      <Mie.L.View f fr fai="center" sbh>
        <Mie.Icon icon={<Icons.Places.UserHome />} size="mini" />
        <Mie.Icon icon={<Icons.Places.UserHome />} size="tiny" />
        <Mie.Icon icon={<Icons.Places.UserHome />} size="small" />
        <Mie.Icon icon={<Icons.Places.UserHome />} />
        <Mie.Icon icon={<Icons.Places.UserHome />} size="large" />
      </Mie.L.View>
      <Mie.L.View f fr fai="center" sbh>
        <Mie.Icon icon={<Icons.Places.UserHome />} size="big" />
        <Mie.Icon icon={<Icons.Places.UserHome />} size="huge" />
        <Mie.Icon icon={<Icons.Places.UserHome />} size="massive" />
      </Mie.L.View>
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