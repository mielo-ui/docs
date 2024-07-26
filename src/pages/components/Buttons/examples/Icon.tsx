import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Icon.tsx?raw"

//@chunk
import * as Icons from "adwaita-symbolic-icons-react"
import * as Mie from "mielo-react"

// prettier-ignore
function Icon() {
  return (
    <Mie.L.View f fr sbh="large">
      <Mie.Button
        icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
      />

      <Mie.Button
        icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
        circular
      />

      <Mie.Button
        icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
        label="Label"
      />

      <Mie.Button
        icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
        iconLabeled
        label="Label"
      />

      <Mie.Button
        icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
        iconLabeled
        label="Label"
        accent
      />

      <Mie.Button
        icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
        iconLabeled
        label="Label"
        filled
        accent
      />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<button class="mie button icon">
  <div class="icon">
    <svg />
  </div>
</button>

<button class="mie button icon circular">
  <div class="icon">
    <svg />
  </div>
</button>

<button class="mie button content icon">
  <div class="icon">
    <svg />
  </div>
  Label
</button>

<button class="mie button labeled content icon">
  <div class="icon">
    <svg />
  </div>
  Label
</button>

<button class="mie button labeled content icon accent">
  <div class="icon">
    <svg />
  </div>
  Label
</button>

<button class="mie button labeled content icon filled accent">
  <div class="icon">
    <svg />
  </div>
  Label
</button>
`.trim()

export default Object.assign(Icon, {
  title: "Icon",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})