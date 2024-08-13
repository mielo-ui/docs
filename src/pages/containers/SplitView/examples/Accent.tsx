import { useState } from "react"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useMediaQuery } from "usehooks-ts"

function Accent() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [open, setOpen] = useState(false)

  const [accent, setAccent] = useState<Mie.OptionValue>({
    title: "Accent",
    value: true,
  })

  const options: any[] = [
    {
      icon: (
        <Mie.L.Icon
          icon={<Icons.Status.DialogInformation />}
          accent={true}
          mr="small"
        />
      ),
      title: "Accent",
      value: true,
      accent: true,
      mh: "none",
      rt: "large",
      rb: "none",
    },
    {
      icon: (
        <Mie.L.Icon
          icon={<Icons.Status.DialogWarning />}
          accent={"warning"}
          mr="small"
        />
      ),
      title: "Warning",
      value: "warning",
      accent: "warning",
      mh: "none",
      r: "none",
    },
    {
      icon: (
        <Mie.L.Icon
          icon={<Icons.Status.DialogError />}
          accent={"error"}
          mr="small"
        />
      ),
      title: "Error",
      value: "error",
      accent: "error",
      mh: "none",
      r: "none",
    },
    {
      icon: (
        <Mie.L.Icon
          icon={<Icons.Emblems.EmblemOk />}
          accent={"success"}
          mr="small"
        />
      ),
      title: "Success",
      value: "success",
      accent: "success",
      mh: "none",
      rb: "large",
      rt: "none",
    },
  ]

  return (
    <Mie.L.View f fc fai="center" sbv="massive" pb="massive" pt="massive">
      <Mie.L.Window
        accent={accent.value}
        shadow
        style={{
          width: isMobile ? "30rem" : "50rem",
        }}
        split={{
          accent: accent.value,

          headerbar: (
            <Mie.HeaderBar
              controls={
                <Mie.Window.Controls controls={["minimize", "close"]} />
              }
              header={
                <Mie.L.Select
                  style={{ width: "20rem" }}
                  label="Accent Color"
                  accent={accent.value}
                  onChange={setAccent}
                  options={options}
                  value={accent}
                  name="accent"
                  size="small"
                />
              }
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
              accent={accent.value}
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