import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Icon.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Icon() {
  return (
    <Mie.L.View f fc fai="center" gr="large">
      <Mie.L.View f fr gc>
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

      <Mie.L.View f fr gc>
        <Mie.L.Button
          accent="warning"
          pl="none"
          pv="none"
          pilled
          pr
          label={
            <Mie.L.Text fbold accent="warning" ml="tiny">
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
            <Mie.L.Text color="light" fbold ml="tiny">
              Labeled
            </Mie.L.Text>
          }
          icon={
            <Mie.L.View color="blue" pv="tiny" pl="tiny" pr="tiny" rl>
              <Mie.L.Icon icon={<Icons.Actions.FolderNew />} color="light" />
            </Mie.L.View>
          }
        />

        <Mie.L.Button
          color="pink"
          pr="small"
          pl="none"
          pv="none"
          filled
          label={
            <Mie.L.Text fbold color="light" ml="tiny">
              Filled
            </Mie.L.Text>
          }
          icon={
            <Mie.L.View color="pink" pv="tiny" pl="tiny" pr="tiny" rl>
              <Mie.L.Icon icon={<Icons.Actions.FolderNew />} color="light" />
            </Mie.L.View>
          }
        />
      </Mie.L.View>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie view f fc fai-center gr-large">
  <div class="mie view f fr gc">
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
  <div class="mie view f fr gc">
    <button class="mie button warning pv-none pr pl-none content pilled">
      <div class="mie icon warning bg rl-circular pv-tiny pr-tiny pl-small">
        <svg />
      </div>
      <div class="mie text warning fbold ml-tiny">Pilled</div>
    </button>
    <button class="mie button accent pv-none pr pl-none content">
      <div class="mie view blue rl pv-tiny pr-tiny pl-tiny">
        <div class="mie icon light">
          <svg />
        </div>
      </div>
      <div class="mie text light fbold ml-tiny">Labeled</div>
    </button>
    <button class="mie button pink pv-none pr-small pl-none content filled">
      <div class="mie view pink rl pv-tiny pr-tiny pl-tiny">
        <div class="mie icon light">
          <svg />
        </div>
      </div>
      <div class="mie text light fbold ml-tiny">Filled</div>
    </button>
  </div>
</div>
`.trim()

export default Object.assign(Icon, {
  title: "Icon",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})