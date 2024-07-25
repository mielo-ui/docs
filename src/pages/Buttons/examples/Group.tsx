import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Group.tsx?raw"

//@chunk
import * as Icons from "adwaita-symbolic-icons-react"
import * as Mie from "mielo-react"

function Group() {
  return (
    <Mie.View>
      <Mie.Button.Group>
        <Mie.Button icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />} />
        <Mie.Button icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />} />
      </Mie.Button.Group>

      <Mie.Button.Group>
        <Mie.Button
          icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
          label="Label"
        />
        <Mie.Button
          icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
          label="Label"
        />
      </Mie.Button.Group>
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie buttons">
  <button class="mie button icon">
    <div class="icon">
      <svg />
    </div>
  </button>

  <button class="mie button icon">
    <div class="icon">
      <svg />
    </div>
    Label
  </button>

  <button class="mie button content icon">
    <div class="icon">
      <svg />
    </div>
    
    Label
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