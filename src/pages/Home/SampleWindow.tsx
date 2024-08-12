import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function SampleWindow() {
  return (
    <Mie.L.Window
      mt="massive"
      r="large"
      shadow
      style={{
        minWidth: "40rem",
        maxWidth: "50rem",
      }}
      headerbar={{
        header: <Mie.Header title="Default Title" size="tiny" center />,
        controls: <Mie.Window.Controls controls={["minimize", "close"]} />,
      }}
    >
      <Mie.L.View f fc fai="center" fjc="center" p="massive">
        <Mie.Header
          center
          size="large"
          title="Welcome"
          subtitle="Starter text"
        />

        <Mie.L.Button
          icon={<Mie.Icon icon={<Icons.Devices.AuthFace />} size="large" />}
          label="Scan"
          size="large"
          ph="massive"
          mt="large"
          pilled
        />
      </Mie.L.View>
    </Mie.L.Window>
  )
} 