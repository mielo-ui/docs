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
                icon={<Mie.L.Icon icon={<Icons.Actions.SidebarShow />} />}
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
    <Mie.L.View f fc fai="start" gr="large" mt mh="small">
      <Mie.L.Header title="Window" />

      <Mie.L.Select
        style={{ width: "20rem" }}
        label="Accent Color"
        accent={accent.value}
        onChange={setAccent}
        value={accent}
        name="accent"
        options={
          [
            {
              description: "Info status",
              title: "Accent",
              value: true,
              accent: true,
              mh: "none",
              rt: "large",
              r: "none",
              icon: (
                <Mie.L.Icon
                  icon={<Icons.Status.DialogInformation />}
                  mr="small"
                  accent
                />
              ),
            },
            {
              description: "Have warn message",
              title: "Warning",
              value: "warning",
              accent: "warning",
              mh: "none",
              r: "none",
              icon: (
                <Mie.L.Icon
                  icon={<Icons.Status.DialogWarning />}
                  accent="warning"
                  mr="small"
                />
              ),
            },
            {
              description: "Failed status",
              title: "Error",
              accent: "error",
              value: "error",
              mh: "none",
              r: "none",
              icon: (
                <Mie.L.Icon
                  icon={<Icons.Status.DialogError />}
                  accent="error"
                  mr="small"
                />
              ),
            },
            {
              description: "Complete message",
              accent: "success",
              title: "Success",
              value: "success",
              rb: "large",
              mh: "none",
              r: "none",
              icon: (
                <Mie.L.Icon
                  icon={<Icons.Emblems.EmblemOk />}
                  accent="success"
                  mr="small"
                />
              ),
            },
          ] as any
        }
      />

      <SampleWindow accent={accent.value} />
    </Mie.L.View>
  )
}