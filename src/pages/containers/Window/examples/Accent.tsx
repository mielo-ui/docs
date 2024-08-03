import { useState } from "react"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function SampleWindow({ accent }: any) {
  return (
    <Mie.L.Window
      accent={accent}
      shadow
      style={{
        width: "30rem",
      }}
      headerbar={{
        controls: <Mie.Window.Controls controls={["minimize", "close"]} />,
        transparent: true,

        header: {
          title: "Default Title",
        },
      }}
    >
      <Mie.L.View f fc fai="center" fjc="center" pt pb="massive">
        <Mie.Header
          subtitle="Starter text"
          title="Welcome"
          size="huge"
          center
        />

        <Mie.L.Item
          icon={<Mie.Icon size="large" icon={<Icons.Status.FolderOpen />} />}
          description="Open new project"
          title="Open"
          activatable
          mv="massive"
          ph="big"
          pv
          r
        />
      </Mie.L.View>
    </Mie.L.Window>
  )
}

function Accent() {
  const [accent, setAccent] = useState({ label: "Accent", value: true })

  return (
    <Mie.L.View f fc fai="center" sbv="massive" pb="massive">
      <Mie.L.Select
        label="Window Accent Color"
        accent={accent.value}
        onChange={setAccent}
        value={accent}
        name="accent"
        options={[
          { label: "Accent", value: true },
          { label: "Warning", value: "warning" },
          { label: "Error", value: "error" },
          { label: "Success", value: "success" },
        ]}
      />

      <SampleWindow accent={accent.value} />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Accent, {
  title: "Accent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})