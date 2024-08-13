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
    <Mie.L.View f fc fai="center" sbv="massive" pb="massive">
      <Mie.L.Window
        accent={accent && accent.value}
        shadow
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
                options={accents}
                value={accent}
                name="accent"
                transparent
              />
            </Mie.L.View>

            <Mie.L.Item
              accent={accent && accent.value}
              style={{ width: "20rem" }}
              activatable
              ph="large"
              pv="small"
              active
              r
              title={<Mie.L.Text bold>Open</Mie.L.Text>}
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