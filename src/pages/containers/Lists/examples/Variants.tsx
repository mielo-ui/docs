import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Variants.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Variants() {
  return (
    <Mie.L.List sbv="small">
      <Mie.L.List.Item title="Title" activatable ph="large" pv r />

      <Mie.L.List.Item
        icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
        title="Title"
        activatable
        ph="small"
        pv="tiny"
        r
      />
      <Mie.L.List.Item
        description="Lorem ipsum description"
        title="Title"
        activatable
        ph="small"
        pv="tiny"
        r
      />
      <Mie.L.List.Item
        icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
        description="Lorem ipsum description"
        title="Title"
        activatable
        ph="small"
        pv="tiny"
        r
      />
      <Mie.L.List.Item
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
        ph="small"
        pv="tiny"
        r
      />
      <Mie.L.List.Item
        icon={<Mie.Icon circular filled icon={<Icons.Actions.FolderNew />} />}
        description="Lorem ipsum description"
        title="Title"
        activatable
        side={
          <>
            <Mie.Button
              icon={<Mie.Icon size="small" icon={<Icons.Places.UserTrash />} />}
              accent="error"
              size="small"
              tertiary
            />
          </>
        }
        ph="small"
        pv="tiny"
        r
      />
    </Mie.L.List>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie list">
  <div class="mie item list activatable">
    <div class="content">
      <div class="title">Title</div>
    </div>
  </div>

  <div class="mie item list activatable">
    <div class="indicator">
      <div class="mie icon">
        <svg />
      </div>
    </div>
    
    <div class="content">
      <div class="title">Title</div>
    </div>
  </div>

  <div class="mie item list activatable">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>

  <div class="mie item list activatable">
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

  <div class="mie item list activatable">
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

  <div class="mie item list activatable">
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
            <svg/>
          </div>
        </div>
      </button>
    </div>
  </div>
</div>
`.trim()

export default Object.assign(Variants, {
  title: "Variants",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})