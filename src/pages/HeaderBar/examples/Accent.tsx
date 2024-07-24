import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Accent() {
  return (
    <Mie.View>
      <Mie.Header size="small" title="Default" />

      <Mie.View flex column p>
        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
          right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
          accent
          mv
          r
        />

        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
          right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
          accent="warning"
          mv
          r
        />

        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
          right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
          accent="error"
          mv
          r
        />

        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
          right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
          accent="success"
          mv
          r
        />
      </Mie.View>

      <Mie.Header size="small" title="Transparent" />

      <Mie.View flex column p>
        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
          right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
          transparent
          accent
          mv
          r
        />

        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
          right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
          transparent
          accent="warning"
          mv
          r
        />

        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
          right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
          transparent
          accent="error"
          mv
          r
        />

        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
          right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
          transparent
          accent="success"
          mv
          r
        />
      </Mie.View>
    </Mie.View>
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