import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Variants.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Variants() {
  return (
    <Mie.L.List f f1 fc>
      <Mie.L.List f fc sbv="small">
        <Mie.L.List.Item title="Title" activatable ph="small" pv="tiny" r />

        <Mie.L.List.Item
          icon={<Mie.L.Icon mr="small" icon={<Icons.Actions.FolderNew />} />}
          title="Title"
          activatable
          ph="small"
          pv="tiny"
          r
        />
      </Mie.L.List>

      <Mie.L.Header mt="large" mb="small" title="Multiline" size="tiny" />
      <Mie.L.Divider mb="large" />

      <Mie.L.List f fc sbv="small">
        <Mie.L.List.Item
          description="Lorem ipsum description"
          title="Title"
          activatable
          ph="small"
          pv="tiny"
          r
        />
        <Mie.L.List.Item
          icon={<Mie.L.Icon mr="small" icon={<Icons.Actions.FolderNew />} />}
          description="Lorem ipsum description"
          title="Title"
          activatable
          ph="small"
          pv="tiny"
          r
        />
      </Mie.L.List>

      <Mie.L.Header mt="large" mb="small" title="Sides" size="tiny" />
      <Mie.L.Divider mb="large" />

      <Mie.L.List f fc sbv="small">
        <Mie.L.List.Item
          description="Lorem ipsum description"
          title="Title"
          activatable
          ph="small"
          pv="tiny"
          r
          side={
            <>
              <Mie.Button
                icon={
                  <Mie.L.Icon mr="small" icon={<Icons.Actions.FolderNew />} />
                }
                label="Label"
                size="small"
                accent
              />
            </>
          }
        />
        <Mie.L.List.Item
          description="Lorem ipsum description"
          title="Title"
          activatable
          ph="small"
          pv="tiny"
          r
          icon={
            <Mie.L.Icon
              mr="small"
              circular
              filled
              icon={<Icons.Actions.FolderNew />}
            />
          }
          side={
            <Mie.ButtonGroup>
              <Mie.Button
                size="small"
                icon={
                  <Mie.L.Icon icon={<Icons.Actions.ListAdd />} size="small" />
                }
              />
              <Mie.Button
                size="small"
                accent="error"
                icon={
                  <Mie.L.Icon icon={<Icons.Places.UserTrash />} size="small" />
                }
              />
            </Mie.ButtonGroup>
          }
        />
      </Mie.L.List>
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