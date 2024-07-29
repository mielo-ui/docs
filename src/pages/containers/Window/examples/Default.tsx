import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Default() {
  return (
    <Mie.L.View>
      <Mie.L.Window
        shadow
        style={{
          width: "30rem",
        }}
        headerbar={{
          header: {
            title: "Default Title",
          },
          controls: <Mie.Window.Controls controls={["minimize", "close"]} />,
        }}
      >
        <Mie.L.View f fc fai="center" fjc="center" p="massive">
          <Mie.Header
            center
            size="massive"
            title="Welcome"
            subtitle="Starter text"
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