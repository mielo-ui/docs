import { useState } from "react"
import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

import rawPropsCode from "../../../../../node_modules/@mielo-ui/mielo-react/src/containers/Collapsible/Props.ts?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Default() {
  const [opened, setOpened] = useState(false)

  return (
    <Mie.L.View f fc>
      <Mie.L.Item
        onClick={() => setOpened(prev => !prev)}
        title="Toggle Content"
        accent="success"
        activatable
        ph="large"
        active
        center
        pv
        r
      />
      <Mie.L.Collapsible mt="large" open={opened}>
        <Mie.L.View bg="content" ph="large" pv r>
          <Mie.L.Header
            icon={
              <Mie.L.Icon
                icon={<Icons.Places.FolderMusic />}
                accent
                bg
                r
                p="small"
              />
            }
            subtitle="Hidden Text"
            title="Content"
            iconSided
            inverted
            // center
            m="none"
          />
        </Mie.L.View>
      </Mie.L.Collapsible>
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