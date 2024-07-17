import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"

<Mie.Header
  title="Union Header"
  subtitle="Subtitle of default header"
/>
`.trim()

const DEFAULT_HTML = `
<div class="mie header center">
  <div class="heading">
    <div class="title">Union Header</div>
    <div class="subtitle">Subtitle of default header</div>
  </div>
</div>
`.trim()

const ICON_TYPESCRIPT = `
<Mie.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Mie.Icon icon={<Mie.Icons.UserHome />} />}
/>

<Mie.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Mie.Icon icon={<Mie.Icons.UserHome />} />}
  iconSided
/>
`.trim()

const ICON_HTML = `
<div class="mie header">
  <div class="heading">
    <div class="mie icon">
      <svg>
    </div>

    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="mie header">
  <div class="mie icon">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

`.trim()

const CENTER_TYPESCRIPT = `
<Mie.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Mie.Icon icon={<Mie.Icons.UserHome />} />}
  size="large"
/>
`.trim()

const CENTER_HTML = `
<div class="mie header center">
  <div class="heading">
    <div class="mie icon">
      <svg>
    </div>
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>
`.trim()

const SIZES_TYPESCRIPT = `
<Mie.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Mie.Icon size="tiny" icon={<Mie.Icons.UserHome />} />}
  iconSided
  size="tiny"
/>

<Mie.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Mie.Icon size="small" icon={<Mie.Icons.UserHome />} />}
  iconSided
  size="small"
/>

<Mie.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Mie.Icon icon={<Mie.Icons.UserHome />} />}
  iconSided
/>

<Mie.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Mie.Icon size="large" icon={<Mie.Icons.UserHome />} />}
  iconSided
  size="large"
/>

<Mie.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Mie.Icon size="big" icon={<Mie.Icons.UserHome />} />}
  iconSided
  size="big"
/>

<Mie.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Mie.Icon size="huge" icon={<Mie.Icons.UserHome />} />}
  iconSided
  size="huge"
/>

<Mie.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Mie.Icon size="massive" icon={<Mie.Icons.UserHome />} />}
  iconSided
  size="massive"
/>
`.trim()

const SIZES_HTML = `
<div class="mie header size tiny">
  <div class="mie icon tiny">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="mie header size small">
  <div class="mie icon small">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="mie header">
  <div class="mie icon">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="mie header size large">
  <div class="mie icon large">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="mie header size big">
  <div class="mie icon big">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="mie header size huge">
  <div class="mie icon huge">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="mie header size massive">
  <div class="mie icon massive">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>
`.trim()

const INVERTED_TYPESCRIPT = `
<Mie.Header
  title="Medium Header"
  subtitle="Subtitle of medium header"
  inverted
/>
`.trim()

const INVERTED_HTML = `
<div class="mie header inverted">
  <div class="heading">
    <div class="title">Medium Header</div>
    <div class="subtitle">Subtitle of medium header</div>
  </div>
</div>
`.trim()

export function HeaderPage() {
  return (
    <div className="page header">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Header"
            subtitle="Different header variants"
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
            <Mie.Header
              title="Union Header"
              subtitle="Subtitle of default header"
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Icon"
          code={{
            jsx: ICON_TYPESCRIPT,
            html: ICON_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            column
            flex1
            flex
          >
            <Mie.Header
              title="Icon Header"
              subtitle="Subtitle of icon header"
              icon={<Mie.Icon icon={<Mie.Icons.UserHome />} />}
            />
            <Mie.Header
              title="Icon Header"
              subtitle="Subtitle of icon header"
              icon={<Mie.Icon icon={<Mie.Icons.UserHome />} />}
              iconSided
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Centered"
          code={{
            jsx: CENTER_TYPESCRIPT,
            html: CENTER_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Header
              title="Icon Header"
              subtitle="Subtitle of icon header"
              icon={<Mie.Icon icon={<Mie.Icons.UserHome />} />}
              center
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Inverted"
          containerColumn
          code={{
            jsx: INVERTED_TYPESCRIPT,
            html: INVERTED_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Header
              title="Medium Header"
              subtitle="Subtitle of medium header"
              inverted
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Sizes"
          containerColumn
          code={{
            jsx: SIZES_TYPESCRIPT,
            html: SIZES_HTML,
          }}
        >
          <Mie.Header
            title="Icon Header"
            subtitle="Subtitle of icon header"
            icon={<Mie.Icon size="tiny" icon={<Mie.Icons.UserHome />} />}
            iconSided
            size="tiny"
          />

          <Mie.Header
            title="Icon Header"
            subtitle="Subtitle of icon header"
            icon={<Mie.Icon size="small" icon={<Mie.Icons.UserHome />} />}
            iconSided
            size="small"
          />

          <Mie.Header
            title="Icon Header"
            subtitle="Subtitle of icon header"
            icon={<Mie.Icon icon={<Mie.Icons.UserHome />} />}
            iconSided
          />

          <Mie.Header
            title="Icon Header"
            subtitle="Subtitle of icon header"
            icon={<Mie.Icon size="large" icon={<Mie.Icons.UserHome />} />}
            iconSided
            size="large"
          />

          <Mie.Header
            title="Icon Header"
            subtitle="Subtitle of icon header"
            icon={<Mie.Icon size="big" icon={<Mie.Icons.UserHome />} />}
            iconSided
            size="big"
          />

          <Mie.Header
            title="Icon Header"
            subtitle="Subtitle of icon header"
            icon={<Mie.Icon size="huge" icon={<Mie.Icons.UserHome />} />}
            iconSided
            size="huge"
          />

          <Mie.Header
            title="Icon Header"
            subtitle="Subtitle of icon header"
            icon={<Mie.Icon size="massive" icon={<Mie.Icons.UserHome />} />}
            iconSided
            size="massive"
          />
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}