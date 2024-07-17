import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"

// ...

<Mie.Button label="Button" />
`.trim()

const DEFAULT_HTML = `
<div class="mie button">
  Button
</div>
`.trim()

const ACCENT_COLORS_TYPESCRIPT = `
<Mie.Button label="Accent" accent />
<Mie.Button label="Success" accent="success" />
<Mie.Button label="Warning" accent="warning" />
<Mie.Button label="Error" accent="error" />
`.trim()

const ACCENT_COLORS_HTML = `
<button class="mie button accent">Accent</button>
<button class="mie button success">Success</button>
<button class="mie button warning">Warning</button>
<button class="mie button error">Error</button>
`.trim()

const TRANSPARENT_TYPESCRIPT = `
<Mie.Button label="Transparent" transparent />
<Mie.Button label="Accent" transparent accent />
<Mie.Button label="Success" transparent accent="success" />
<Mie.Button label="Warning" transparent accent="warning" />
<Mie.Button label="Error" transparent accent="error" />
`.trim()

const TRANSPARENT_HTML = `
<button class="mie button accent transparent">Accent</button>
<button class="mie button success transparent">Success</button>
<button class="mie button warning transparent">Warning</button>
<button class="mie button error transparent">Error</button>
`.trim()

const TERTIARY_TYPESCRIPT = `
<Mie.Button label="Transparent" transparent />
<Mie.Button label="Accent" transparent accent />
<Mie.Button label="Success" transparent accent="success" />
<Mie.Button label="Warning" transparent accent="warning" />
<Mie.Button label="Error" transparent accent="error" />
`.trim()

const TERTIARY_HTML = `
<button class="mie button accent transparent">Accent</button>
<button class="mie button success transparent">Success</button>
<button class="mie button warning transparent">Warning</button>
<button class="mie button error transparent">Error</button>
`.trim()

const FILLED_TYPESCRIPT = `
<Mie.Button label="Filled" filled />
<Mie.Button label="Accent" filled accent />
<Mie.Button label="Success" filled accent="success" />
<Mie.Button label="Warning" filled accent="warning" />
<Mie.Button label="Error" filled accent="error" />
`.trim()

const FILLED_HTML = `
<button class="mie button filled accent">Accent</button>
<button class="mie button filled success">Success</button>
<button class="mie button filled warning">Warning</button>
<button class="mie button filled error">Error</button>
`.trim()

const PILLED_TYPESCRIPT = `
<Mie.Button pilled label="Pilled" />
<Mie.Button pilled label="Accent" accent />
<Mie.Button pilled label="Success" accent="success" />
<Mie.Button pilled label="Warning" accent="warning" />
<Mie.Button pilled label="Error" accent="error" />
`.trim()

const PILLED_HTML = `
<button class="mie button pilled">Pilled</button>
<button class="mie button pilled accent">Accent</button>
<button class="mie button pilled success">Success</button>
<button class="mie button pilled warning">Warning</button>
<button class="mie button pilled error">Error</button>
`.trim()

const ICON_TYPESCRIPT = `
<Mie.Button icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />} />
<Mie.Button icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />} circular />
<Mie.Button icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />} label="Label" />
<Mie.Button icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />} iconLabeled label="Label" 

<Mie.Button
  icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
  iconLabeled
  label="Label"
  accent
/>

<Mie.Button
  icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
  iconLabeled
  label="Label"
  filled
  accent
/>
`.trim()

const ICON_HTML = `
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

const GROUPS_TYPESCRIPT = `
<div className="mie buttons">
  <Mie.Button icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />} />
  <Mie.Button icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />} />
</div>

<div className="mie buttons">
  <Mie.Button icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />} label="Label" />
  <Mie.Button icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />} label="Label" />
</div>
`.trim()

const GROUPS_HTML = `
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

const SIZES_TYPESCRIPT = `
<Mie.Button label="Small" size="small" />
<Mie.Button label="Medium Default" />
<Mie.Button label="Large" size="large" />
`.trim()

const SIZES_HTML = `
  <button class="mie button small">
    Small
  </button>

  <button class="mie button">
    Medium Default
  </button>

  <button class="mie button large">
    Large
  </button>
`.trim()

export function ButtonPage() {
  return (
    <div className="page buttons">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Buttons"
            subtitle="Different button variants & groups"
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
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Button label="Button" />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Accent Colors"
          code={{
            jsx: ACCENT_COLORS_TYPESCRIPT,
            html: ACCENT_COLORS_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Button label="Accent" accent />
            <Mie.Button label="Success" accent="success" />
            <Mie.Button label="Warning" accent="warning" />
            <Mie.Button label="Error" accent="error" />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Transparent"
          code={{
            jsx: TRANSPARENT_TYPESCRIPT,
            html: TRANSPARENT_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Button label="Transparent" transparent />
            <Mie.Button label="Accent" transparent accent />
            <Mie.Button label="Success" transparent accent="success" />
            <Mie.Button label="Warning" transparent accent="warning" />
            <Mie.Button label="Error" transparent accent="error" />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Tertiary"
          code={{
            jsx: TERTIARY_TYPESCRIPT,
            html: TERTIARY_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Button label="Transparent" transparent tertiary />
            <Mie.Button label="Accent" transparent tertiary accent />
            <Mie.Button label="Success" transparent tertiary accent="success" />
            <Mie.Button label="Warning" transparent tertiary accent="warning" />
            <Mie.Button label="Error" transparent tertiary accent="error" />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Filled"
          code={{
            jsx: FILLED_TYPESCRIPT,
            html: FILLED_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Button label="Filled" filled />
            <Mie.Button label="Accent" filled accent />
            <Mie.Button label="Success" filled accent="success" />
            <Mie.Button label="Warning" filled accent="warning" />
            <Mie.Button label="Error" filled accent="error" />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Pilled"
          code={{
            jsx: PILLED_TYPESCRIPT,
            html: PILLED_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Button pilled label="Pilled" />
            <Mie.Button pilled label="Accent" accent />
            <Mie.Button pilled label="Success" accent="success" />
            <Mie.Button pilled label="Warning" accent="warning" />
            <Mie.Button pilled label="Error" accent="error" />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Icon"
          code={{
            jsx: ICON_TYPESCRIPT,
            html: ICON_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Button icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />} />
            <Mie.Button
              icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
              circular
            />
            <Mie.Button
              icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
              label="Label"
            />
            <Mie.Button
              icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
              iconLabeled
              label="Label"
            />

            <Mie.Button
              icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
              iconLabeled
              label="Label"
              accent
            />

            <Mie.Button
              icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
              iconLabeled
              label="Label"
              filled
              accent
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Groups"
          code={{
            jsx: GROUPS_TYPESCRIPT,
            html: GROUPS_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <div className="mie buttons">
              <Mie.Button icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />} />
              <Mie.Button icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />} />
            </div>

            <div className="mie buttons">
              <Mie.Button
                icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
                label="Label"
              />
              <Mie.Button
                icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
                label="Label"
              />
            </div>
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Sizes"
          code={{
            jsx: SIZES_TYPESCRIPT,
            html: SIZES_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Button label="Small" size="small" />
            <Mie.Button label="Medium Default" />
            <Mie.Button label="Large" size="large" />
          </Mie.View>
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}