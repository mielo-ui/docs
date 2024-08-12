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
        header: <Mie.Header size="tiny" title="Default Title" center />,
        transparent: true,
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
  const [accent, setAccent] = useState<Mie.OptionValue>({
    label: "Accent",
    value: true,
  })

  return (
    <Mie.L.View f fc fai="center" sbv="massive" pb="massive">
      <Mie.L.Select
        style={{ width: "20rem" }}
        label="Accent Color"
        accent={accent.value}
        onChange={setAccent}
        value={accent}
        name="accent"
        options={[
          {
            icon: <Mie.Icon icon={<Icons.Status.DialogInformation />} />,
            title: "Accent",
            description: "Info status",
            value: true,
            accent: true,
          },
          {
            icon: <Mie.Icon icon={<Icons.Status.DialogWarning />} />,
            title: "Warning",
            description: "Have warn message",
            value: "warning",
            accent: "warning",
          },
          {
            icon: <Mie.Icon icon={<Icons.Status.DialogError />} />,
            title: "Error",
            description: "Failed status",
            accent: "error",
            value: "error",
          },
          {
            icon: <Mie.Icon icon={<Icons.Emblems.EmblemOk />} />,
            description: "Complete message",
            title: "Success",
            accent: "success",
            value: "success",
          },
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