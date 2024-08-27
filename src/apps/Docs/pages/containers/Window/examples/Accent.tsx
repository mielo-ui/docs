import { useState } from "react"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Accent() {
  const [accent, setAccent] = useState<Mie.OptionValue>({
    value: undefined,
    label: "None",
  })

  const accents: any[] = [
    {
      icon: <Mie.L.Icon mr="small" icon={<Icons.Actions.EditClear />} />,
      value: undefined,
      title: "None",
      mt: "small",
    },
    {
      icon: <Mie.L.Icon mr="small" icon={<Icons.Status.DialogInformation />} />,
      title: "Accent",
      value: true,
    },
    {
      icon: <Mie.L.Icon mr="small" icon={<Icons.Status.DialogWarning />} />,
      title: "Warning",
      value: "warning",
    },
    {
      icon: <Mie.L.Icon mr="small" icon={<Icons.Status.DialogError />} />,
      title: "Error",
      value: "error",
    },
    {
      icon: <Mie.L.Icon mr="small" icon={<Icons.Emblems.EmblemOk />} />,
      title: "Success",
      value: "success",
      mb: "small",
    },
  ]

  return (
    <Mie.L.View f fc fai="center" gr="massive" pb="massive" pt="massive">
      <Mie.L.Window
        accent={accent && accent.value}
        style={{
          paddingBottom: "5rem",
          width: "30rem",
        }}
        headerbar={{
          controls: <Mie.Window.Controls controls={["minimize", "close"]} />,
          header: <Mie.Header size="tiny" title="Default Title" center />,
          transparent: true,
        }}
      >
        <Mie.L.View f fc fai="center" fjc="center" pt pb="massive">
          <Mie.L.Header
            subtitle="Starter text"
            title="Welcome"
            size="large"
            mb="massive"
            center
          />

          <Mie.L.View f fc sbv>
            <Mie.L.View bg="content" r>
              <Mie.L.Select
                // accent={accent && accent.value}
                style={{ width: "20rem" }}
                label="Accent Color"
                onChange={setAccent}
                menuHeight="12.5rem"
                options={accents}
                value={accent}
                name="accent"
                transparent
              />
            </Mie.L.View>

            <Mie.L.Button
              accent={accent && accent.value}
              style={{ width: "20rem" }}
              fjc="start"
              ph="large"
              pv="small"
              hover
              r
              f
            >
              <Mie.L.Item
                title={<Mie.L.Text fbold>Open</Mie.L.Text>}
                r
                description={
                  <Mie.L.Text size="small" muted>
                    Open new project
                  </Mie.L.Text>
                }
                icon={
                  <Mie.L.Icon
                    icon={<Icons.Status.FolderOpen />}
                    size="large"
                    mr="small"
                  />
                }
              />
            </Mie.L.Button>
          </Mie.L.View>
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