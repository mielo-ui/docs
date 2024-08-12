import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useMediaQuery } from "usehooks-ts"
import { useState } from "react"

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
            transparent
            header={<Mie.Header title="Default title" size="tiny" />}
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
            headerbar={
              <Mie.HeaderBar
                transparent
                header={<Mie.Header title="Sidebar" size="tiny" />}
              />
            }
            size="small"
            opened={open}
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

export function Window() {
  const [accent, setAccent] = useState<Mie.OptionValue>({
    title: "Error",
    value: "error",
  })

  return (
    <Mie.L.View f fc fai="start" sbv="large" mt mh="small">
      <Mie.L.Header title="View" />

      <Mie.L.Select
        style={{ width: "20rem" }}
        label="Accent Color"
        accent={accent.value}
        onChange={setAccent}
        value={accent}
        name="accent"
        options={[
          {
            icon: <Mie.Icon accent icon={<Icons.Status.DialogInformation />} />,
            description: "Info status",
            title: "Accent",
            value: true,
            accent: true,
          },
          {
            description: "Have warn message",
            title: "Warning",
            value: "warning",
            accent: "warning",
            icon: (
              <Mie.Icon
                icon={<Icons.Status.DialogWarning />}
                accent="warning"
              />
            ),
          },
          {
            description: "Failed status",
            title: "Error",
            accent: "error",
            value: "error",
            icon: (
              <Mie.Icon accent="error" icon={<Icons.Status.DialogError />} />
            ),
          },
          {
            description: "Complete message",
            accent: "success",
            title: "Success",
            value: "success",
            icon: (
              <Mie.Icon accent="success" icon={<Icons.Emblems.EmblemOk />} />
            ),
          },
        ]}
      />

      <SampleWindow accent={accent.value} />
    </Mie.L.View>
  )
}