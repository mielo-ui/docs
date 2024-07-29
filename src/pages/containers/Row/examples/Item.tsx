import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Item.tsx?raw"

//@chunk
import * as Icons from "adwaita-symbolic-icons-react"
import * as Mie from "mielo-react"

function Item() {
  return (
    <Mie.L.Rows r shadow>
      <Mie.L.Rows.Row rt title="Title" activatable />

      <Mie.L.Rows.Row
        icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
        title="Title"
        activatable
      />

      <Mie.L.Rows.Row
        description="Lorem ipsum description"
        title="Title"
        activatable
      />

      <Mie.L.Rows.Row
        icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
        description="Lorem ipsum description"
        title="Title"
        activatable
      />

      <Mie.L.Rows.Row
        description="Lorem ipsum description"
        title="Title"
        activatable
        side={
          <>
            <Mie.Button
              icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
              label="Label"
              size="small"
              accent
            />
          </>
        }
      />

      <Mie.L.Rows.Row
        icon={<Mie.Icon circular filled icon={<Icons.Actions.FolderNew />} />}
        description="Lorem ipsum description"
        title="Title"
        activatable
        side={
          <>
            <Mie.Button
              icon={<Mie.Icon icon={<Icons.Places.UserTrash />} />}
              accent="error"
              size="small"
              filled
            />
          </>
        }
        rb
      />
    </Mie.L.Rows>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie rows">
  <div class="mie item row property">
    <div class="content">
      <div class="title">Title</div>
    </div>
  </div>

  <div class="mie item row property">
    <div class="indicator">
      <div class="mie icon">
        <svg />
      </div>
    </div>

    <div class="content">
      <div class="title">Title</div>
    </div>
  </div>

  <div class="mie item row property">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>

  <div class="mie item row property">
    <div class="indicator">
      <div class="mie icon">
        <svg />
      </div>
    </div>
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>

  <div class="mie item row property">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>

    <div class="side">
      <button class="mie button content icon accent small">
        <div class="icon">
          <div class="mie icon">
            <svg />
          </div>
        </div>

        Label
      </button>
    </div>
  </div>

  <div class="mie item row property">
    <div class="indicator">
      <div class="mie icon circular filled">
        <svg />
      </div>
    </div>

    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
    
    <div class="side">
      <button class="mie button icon filled error small">
        <div class="icon">
          <div class="mie icon">
            <svg />
          </div>
        </div>
      </button>
    </div>
  </div>
</div>
`.trim()

export default Object.assign(Item, {
  title: "Item",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})