import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Accent() {
  return (
    <Mie.L.View f fc f1>
      <Mie.Header size="small" title="Default" />

      <Mie.L.View f fc f1 p>
        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserHome />} />} />
          }
          right={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserTrash />} />} />
          }
          accent
          mv
          r
        />

        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserHome />} />} />
          }
          right={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserTrash />} />} />
          }
          accent="warning"
          mv
          r
        />

        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserHome />} />} />
          }
          right={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserTrash />} />} />
          }
          accent="error"
          mv
          r
        />

        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserHome />} />} />
          }
          right={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserTrash />} />} />
          }
          accent="success"
          mv
          r
        />
      </Mie.L.View>

      <Mie.Header size="small" title="Transparent" />

      <Mie.L.View f fc p>
        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserHome />} />} />
          }
          right={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserTrash />} />} />
          }
          transparent
          accent
          mv
          r
        />

        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserHome />} />} />
          }
          right={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserTrash />} />} />
          }
          transparent
          accent="warning"
          mv
          r
        />

        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserHome />} />} />
          }
          right={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserTrash />} />} />
          }
          transparent
          accent="error"
          mv
          r
        />

        <Mie.L.HeaderBar
          header={<Mie.Header title="Title" subtitle="Subtitle" />}
          left={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserHome />} />} />
          }
          right={
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserTrash />} />} />
          }
          transparent
          accent="success"
          mv
          r
        />
      </Mie.L.View>
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