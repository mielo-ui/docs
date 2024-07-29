import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Default() {
  return (
    <Mie.L.View pt="massive">
      <Mie.L.Window
        shadow
        style={{
          width: "50rem",
        }}
        split={{
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
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Default, {
  title: "Default",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})