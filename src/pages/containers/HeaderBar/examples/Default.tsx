import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

import rawPropsCode from "../../../../../node_modules/@mielo-ui/mielo-react/src/containers/HeaderBar/Props.ts?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useMediaQuery } from "usehooks-ts"

function Default() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <Mie.L.View f f1 fai="center" fjc="center" mt="big">
      <Mie.L.Window
        shadow
        style={{
          width: "100%",
        }}
        headerbar={{
          controls: <Mie.Window.Controls controls={["minimize", "close"]} />,
          header: !isMobile && (
            <Mie.Header size="tiny" title="Default Title" center />
          ),
          left: (
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserHome />} />} />
          ),
          right: (
            <Mie.L.Button
              icon={<Mie.Icon icon={<Icons.Places.UserTrash />} />}
              mr="small"
            />
          ),
        }}
      >
        <Mie.L.View f fc fai="center" fjc="center" p="massive"></Mie.L.View>
      </Mie.L.Window>
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