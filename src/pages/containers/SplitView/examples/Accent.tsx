import { useState } from "react"

import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function SampleWindow({ accent }: any) {
  return (
    <Mie.L.Window
      accent={accent}
      shadow
      style={{
        width: "50rem",
      }}
      split={{
        accent,

        headerbar() {
          return (
            <Mie.HeaderBar
              transparent
              header={{
                title: "Default Title",
              }}
              controls={
                <Mie.Window.Controls controls={["minimize", "close"]} />
              }
            />
          )
        },
        sidebar() {
          return (
            <Mie.SplitView.Sidebar
              accent={accent}
              headerbar={
                <Mie.HeaderBar transparent header={{ title: "Menu" }} />
              }
              size="small"
              opened
            >
              <Mie.L.View f f1 fc fjc="center" m="large">
                <Mie.Button label="Tap" />
              </Mie.L.View>
            </Mie.SplitView.Sidebar>
          )
        },
      }}
    >
      <Mie.L.View f fc fai="center" fjc="center" p="massive">
        <Mie.Header
          subtitle="Starter text"
          title="Welcome"
          size="massive"
          center
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
        label="SplitView Accent Color"
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