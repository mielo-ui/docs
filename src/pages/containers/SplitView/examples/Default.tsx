import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

import rawPropsCode from "../../../../../node_modules/@mielo-ui/mielo-react/src/containers/SplitView/Props.ts?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useMediaQuery } from "usehooks-ts"
import { useState } from "react"

function Default() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [open, setOpen] = useState(false)

  return (
    <Mie.L.View pt="massive">
      <Mie.L.Window
        style={{
          width: isMobile ? "30rem" : "50rem",
        }}
        shadow
        split={{
          overlay:
            open &&
            function () {
              setOpen(false)
            },
          headerbar: (
            <Mie.HeaderBar
              transparent
              header={{
                title: "Default Title",
              }}
              left={
                <Mie.Button
                  icon={<Mie.Icon icon={<Icons.Actions.SidebarShow />} />}
                  onClick={() => setOpen(prev => !prev)}
                  transparent
                />
              }
              controls={
                <Mie.Window.Controls controls={["minimize", "close"]} />
              }
            />
          ),
          sidebar: (
            <Mie.SplitView.Sidebar
              headerbar={
                <Mie.HeaderBar transparent header={{ title: "Menu" }} />
              }
              animateStyle="overlap"
              opened={open}
              size="small"
            >
              <Mie.L.View f f1 fc fjc="center" m="large">
                <Mie.Button label="Tap" />
              </Mie.L.View>
            </Mie.SplitView.Sidebar>
          ),
        }}
      >
        <Mie.L.View f fc fai="center" fjc="center" p="massive">
          <Mie.Header
            subtitle="Starter text"
            title="Welcome"
            size="massive"
            center
          />
        </Mie.L.View>
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