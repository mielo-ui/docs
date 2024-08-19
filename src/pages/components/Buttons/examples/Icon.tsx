import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Icon.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Icon() {
  return (
    <Mie.L.View f fc sbv fai="center">
      <Mie.L.View f fr sbh>
        <Mie.Button icon={<Mie.Icon icon={<Icons.Status.MailUnread />} />} />

        <Mie.Button
          icon={<Mie.Icon icon={<Icons.Actions.ListAdd />} />}
          circular
        />

        <Mie.Button
          icon={<Mie.L.Icon mr="small" icon={<Icons.Actions.BookmarkNew />} />}
          label="Add Bookmark"
        />
      </Mie.L.View>

      <Mie.L.View f fr fai="start" fjc="start" gc="tiny">
        <Mie.L.Button
          accent="warning"
          pl="none"
          pv="none"
          pilled
          pr
          label={
            <Mie.L.Text bold ml="tiny">
              Pilled
            </Mie.L.Text>
          }
          icon={
            <Mie.L.Icon
              icon={<Icons.Actions.FolderNew />}
              accent="warning"
              rl="circular"
              pl="small"
              pv="tiny"
              pr="tiny"
              bg
            />
          }
        />

        <Mie.L.Button
          pl="none"
          pv="none"
          accent
          pr
          label={
            <Mie.L.Text bold ml="tiny">
              Labeled
            </Mie.L.Text>
          }
          icon={
            <Mie.L.Icon
              icon={<Icons.Actions.FolderNew />}
              pl="small"
              p="tiny"
              accent
              rl
              bg
            />
          }
        />

        <Mie.L.Button
          pr="small"
          pl="none"
          pv="none"
          filled
          accent
          label={
            <Mie.L.Text bold ml="mini">
              Filled
            </Mie.L.Text>
          }
          icon={
            <Mie.L.Icon
              icon={<Icons.Actions.FolderNew />}
              rl
              p="tiny"
              accent
              bg
            />
          }
        />
      </Mie.L.View>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie view f fr sbh">
  <button class="mie button">
    <div class="mie icon">
      <svg />
    </div>
  </button>

  <button class="mie button circular">
    <div class="mie icon">
      <svg />
    </div>
  </button>

  <button class="mie button content">
    <div class="mie icon mr-small">
      <svg />
    </div>
    Add Bookmark
  </button>
</div>

<div class="mie view f fr fjc-start fai-start sbh-tiny">
  <button class="mie button warning pv-none pr pl-none content pilled">
    <div class="mie icon warning bg pv-tiny pr-tiny pl-small">
      <svg />
    </div>
    <div class="mie text bold ml-tiny">Pilled</div>
  </button>

  <button class="mie button accent pv-none pr pl-none content">
    <div class="mie icon accent bg p-tiny pl-small">
      <svg />
    </div>
    <div class="mie text bold ml-tiny">Labeled</div>
  </button>
  
  <button class="mie button accent pv-none pr-small pl-none content filled">
    <div class="mie icon accent bg p-tiny">
      <svg />
    </div>
    <div class="mie text bold ml-mini">Filled</div>
  </button>
</div>

`.trim()

export default Object.assign(Icon, {
  title: "Icon",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})