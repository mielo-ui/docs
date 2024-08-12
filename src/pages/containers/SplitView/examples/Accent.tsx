import { useState } from "react"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useMediaQuery } from "usehooks-ts"

function SampleWindow({ accent }: any) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [open, setOpen] = useState(false)

  return (
    <Mie.L.Window
      accent={accent}
      shadow
      style={{
        width: isMobile ? "30rem" : "50rem",
      }}
      split={{
        accent,

        headerbar: (
          <Mie.HeaderBar
            controls={<Mie.Window.Controls controls={["minimize", "close"]} />}
            header={<Mie.Header size="tiny" title="Default title" center />}
            transparent
            left={
              <Mie.Button
                icon={<Mie.Icon icon={<Icons.Actions.SidebarShow />} />}
                onClick={() => setOpen(prev => !prev)}
                transparent
              />
            }
          />
        ),
        sidebar: (
          <Mie.SplitView.Sidebar
            accent={accent}
            size="small"
            opened={open}
            headerbar={
              <Mie.HeaderBar
                transparent
                header={<Mie.Header size="tiny" title="Sidebar" center />}
              />
            }
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
          size="large"
          center
        />
      </Mie.L.View>
    </Mie.L.Window>
  )
}

function Accent() {
  const [accent, setAccent] = useState<Mie.OptionValue>({
    title: "Accent",
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