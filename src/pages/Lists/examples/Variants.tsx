import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Variants.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Variants() {
  return (
    <Mie.List>
      <Mie.List.Item title="Title" activatable />
      <Mie.List.Item
        icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
        title="Title"
        activatable
      />
      <Mie.List.Item
        description="Lorem ipsum description"
        title="Title"
        activatable
      />
      <Mie.List.Item
        icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
        description="Lorem ipsum description"
        title="Title"
        activatable
      />
      <Mie.List.Item
        description="Lorem ipsum description"
        title="Title"
        activatable
        side={
          <>
            <Mie.Button
              icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
              label="Label"
              size="small"
              accent
            />
          </>
        }
      />
      <Mie.List.Item
        icon={<Mie.Icon circular filled icon={<Mie.Icons.FolderNew />} />}
        description="Lorem ipsum description"
        title="Title"
        activatable
        side={
          <>
            <Mie.Button
              icon={<Mie.Icon icon={<Mie.Icons.UserTrash />} />}
              accent="error"
              size="small"
              filled
            />
          </>
        }
      />
    </Mie.List>
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