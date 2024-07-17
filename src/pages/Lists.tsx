import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"

<Mie.List>
  <Mie.List.Item title="Some text..." activatable />
  <Mie.List.Item title="Some text..." activatable />
  <Mie.List.Item title="Some text..." activatable />
</Mie.List>
`.trim()

const DEFAULT_HTML = `
<div class="mie list">
  <div class="mie item list activatable">
    <div class="content">
      <div class="title">Some text...</div>
    </div>
  </div>
  <div class="mie item list activatable">
    <div class="content">
      <div class="title">Some text...</div>
    </div>
  </div>
  <div class="mie item list activatable">
    <div class="content">
      <div class="title">Some text...</div>
    </div>
  </div>
</div>
`.trim()

const ACCENTS_TYPESCRIPT = `
<Mie.List>
  <Mie.List.Item
    accent="warning"
    title="Title"
    description="Lorem ipsum description"
    activatable
  />
  <Mie.List.Item
    accent="error"
    title="Title"
    description="Lorem ipsum description"
    activatable
  />
  <Mie.List.Item
    accent="success"
    title="Title"
    description="Lorem ipsum description"
    activatable
  />
</Mie.List>
`.trim()

const ACCENTS_HTML = `
<div class="mie list">
  <div class="mie item warning list warning activatable">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
  <div class="mie item error list error activatable">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
  <div class="mie item success list success activatable">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
</div>
`.trim()

const SIZES_TYPESCRIPT = `
<Mie.List>
  <Mie.List.Item
    description="Lorem ipsum description"
    accent="warning"
    title="Small Title"
    size="small"
    activatable
  />
  <Mie.List.Item
    description="Lorem ipsum description"
    accent="error"
    title="Default Title"
    activatable
  />
  <Mie.List.Item
    description="Lorem ipsum description"
    accent="success"
    title="Large Title"
    size="large"
    activatable
  />
</Mie.List>
`.trim()

const SIZES_HTML = `
<div class="mie list">
  <div class="mie item warning small list warning activatable">
    <div class="content">
      <div class="title">Small Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
  <div class="mie item error list error activatable">
    <div class="content">
      <div class="title">Default Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
  <div class="mie item success large list success activatable">
    <div class="content">
      <div class="title">Large Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
</div>
`.trim()

const EXPO_TYPESCRIPT = `
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
`.trim()

const EXPO_HTML = `
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

export function ListPage() {
  return (
    <div className="page checkbox">
      <Mie.Clamp
        header={
          <Mie.Header
            title="List"
            subtitle="Different lists variants"
            size="large"
            center
          />
        }
      >
        <ComponentGroup
          title="Default"
          code={{
            jsx: DEFAULT_TYPESCRIPT,
            html: DEFAULT_HTML,
          }}
        >
          <Mie.List>
            <Mie.List.Item title="Some text..." activatable />
            <Mie.List.Item title="Some text..." activatable />
            <Mie.List.Item title="Some text..." activatable />
          </Mie.List>
        </ComponentGroup>

        <ComponentGroup
          title="Accents"
          code={{
            jsx: ACCENTS_TYPESCRIPT,
            html: ACCENTS_HTML,
          }}
        >
          <Mie.List>
            <Mie.List.Item
              accent="warning"
              title="Title"
              description="Lorem ipsum description"
              activatable
            />
            <Mie.List.Item
              accent="error"
              title="Title"
              description="Lorem ipsum description"
              activatable
            />
            <Mie.List.Item
              accent="success"
              title="Title"
              description="Lorem ipsum description"
              activatable
            />
          </Mie.List>
        </ComponentGroup>

        <ComponentGroup
          title="Sizes"
          code={{
            jsx: SIZES_TYPESCRIPT,
            html: SIZES_HTML,
          }}
        >
          <Mie.List>
            <Mie.List.Item
              description="Lorem ipsum description"
              accent="warning"
              title="Small Title"
              size="small"
              activatable
            />
            <Mie.List.Item
              description="Lorem ipsum description"
              accent="error"
              title="Default Title"
              activatable
            />
            <Mie.List.Item
              description="Lorem ipsum description"
              accent="success"
              title="Large Title"
              size="large"
              activatable
            />
          </Mie.List>
        </ComponentGroup>

        <ComponentGroup
          title="Variants"
          containerColumn
          code={{
            jsx: EXPO_TYPESCRIPT,
            html: EXPO_HTML,
          }}
        >
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
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}