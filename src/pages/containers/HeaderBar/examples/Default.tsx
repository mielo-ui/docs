import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

import rawPropsCode from "../../../../../node_modules/@mielo-ui/mielo-react/src/containers/HeaderBar/Props.ts?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Default() {
  return (
    <Mie.L.View f f1>
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
    props: rawPropsCode,
    html: rawHtmlCode,
  },
})