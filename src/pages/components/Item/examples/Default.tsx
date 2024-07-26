import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Icons from "adwaita-symbolic-icons-react"
import * as Mie from "mielo-react"

function Default() {
  return (
    <Mie.L.View>
      <Mie.L.View className="sample" fjc="center" fc f1 f>
        <Mie.Item title="Item Title" description="Description line" />

        <Mie.Item
          icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
          title="Item Title"
        />

        <Mie.Item
          icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
          title="Vertical Item Title"
          description="Description message"
          vertical
          center
        />

        <Mie.Item
          icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
          description="Some description text"
          title="Item Title"
          side={
            <Mie.Button
              icon={<Icons.Places.UserTrash />}
              accent="error"
              size="small"
              circular
            />
          }
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

export default Object.assign(Default, {
  title: "Default",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})