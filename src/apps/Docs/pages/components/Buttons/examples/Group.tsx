import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Group.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Group() {
  return (
    <Mie.L.View f fc sbv fai="center">
      <Mie.Button.Group>
        <Mie.Button
          icon={<Mie.L.Icon mr="small" icon={<Icons.Actions.FolderNew />} />}
          label="Label"
        />
        <Mie.Button
          icon={<Mie.L.Icon mr="small" icon={<Icons.Actions.FolderNew />} />}
          label="Label"
        />
      </Mie.Button.Group>

      <Mie.Button.Group>
        <Mie.Button icon={<Mie.L.Icon icon={<Icons.Actions.FolderNew />} />} />
        <Mie.Button icon={<Mie.L.Icon icon={<Icons.Actions.FolderNew />} />} />
      </Mie.Button.Group>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie buttons">
  <button class="mie button content">
    <div class="mie icon mr-small">
      <svg />
    </div>
    Label
  </button>

  <button class="mie button content">
    <div class="mie icon mr-small">
      <svg />
    </div>
    Label
  </button>
</div>

<div class="mie buttons">
  <button class="mie button">
    <div class="mie icon">
      <svg />
    </div>
  </button>
  
  <button class="mie button">
    <div class="mie icon">
      <svg />
    </div>
  </button>
</div>

`.trim()

export default Object.assign(Group, {
  title: "Group",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})