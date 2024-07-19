import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"

<Mie.HeaderBar
  header={<Mie.Header title="Title" subtitle="Subtitle" />}
  left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
  right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
/>
`.trim()

const TRANSPARENT_TYPESCRIPT = `
<Mie.HeaderBar
  header={<Mie.Header title="Title" subtitle="Subtitle" />}
  left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
  right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
  transparent
/>
`.trim()

const ACCENT_TYPESCRIPT = `
<Mie.Header size="small" title="Default" />

<Mie.View flex column padding>
  <Mie.HeaderBar
    header={<Mie.Header title="Title" subtitle="Subtitle" />}
    left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
    right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
    accent
  />

  <Mie.HeaderBar
    header={<Mie.Header title="Title" subtitle="Subtitle" />}
    left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
    right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
    accent="warning"
  />

  <Mie.HeaderBar
    header={<Mie.Header title="Title" subtitle="Subtitle" />}
    left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
    right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
    accent="error"
  />

  <Mie.HeaderBar
    header={<Mie.Header title="Title" subtitle="Subtitle" />}
    left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
    right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
    accent="success"
  />
</Mie.View>

<Mie.Header size="small" title="Transparent" />

<Mie.View flex column padding>
  <Mie.HeaderBar
    header={<Mie.Header title="Title" subtitle="Subtitle" />}
    left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
    right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
    transparent
    accent
  />
  
  <Mie.HeaderBar
    header={<Mie.Header title="Title" subtitle="Subtitle" />}
    left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
    right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
    transparent
    accent="warning"
  />

  <Mie.HeaderBar
    header={<Mie.Header title="Title" subtitle="Subtitle" />}
    left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
    right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
    transparent
    accent="error"
  />

  <Mie.HeaderBar
    header={<Mie.Header title="Title" subtitle="Subtitle" />}
    left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
    right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
    transparent
    accent="success"
  />
</Mie.View>
`.trim()

export function HeaderBarPage() {
  return (
    <div className="page checkbox">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Different headerbar variants"
            title="HeaderBar"
            size="large"
            center
          />
        }
      >
        <ComponentGroup
          title="Default"
          code={{
            jsx: DEFAULT_TYPESCRIPT,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.HeaderBar
              header={<Mie.Header title="Title" subtitle="Subtitle" />}
              left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
              right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Transparent"
          code={{
            jsx: TRANSPARENT_TYPESCRIPT,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.HeaderBar
              header={<Mie.Header title="Title" subtitle="Subtitle" />}
              left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
              right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
              transparent
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Accent"
          code={{
            jsx: ACCENT_TYPESCRIPT,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            column
            flex1
            flex
          >
            <Mie.Header size="small" title="Default" />

            <Mie.View flex column p>
              <Mie.HeaderBar
                header={<Mie.Header title="Title" subtitle="Subtitle" />}
                left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
                right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
                accent
              />
              <Mie.HeaderBar
                header={<Mie.Header title="Title" subtitle="Subtitle" />}
                left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
                right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
                accent="warning"
              />
              <Mie.HeaderBar
                header={<Mie.Header title="Title" subtitle="Subtitle" />}
                left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
                right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
                accent="error"
              />
              <Mie.HeaderBar
                header={<Mie.Header title="Title" subtitle="Subtitle" />}
                left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
                right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
                accent="success"
              />
            </Mie.View>

            <Mie.Header size="small" title="Transparent" />

            <Mie.View flex column p>
              <Mie.HeaderBar
                header={<Mie.Header title="Title" subtitle="Subtitle" />}
                left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
                right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
                transparent
                accent
              />
              <Mie.HeaderBar
                header={<Mie.Header title="Title" subtitle="Subtitle" />}
                left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
                right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
                transparent
                accent="warning"
              />
              <Mie.HeaderBar
                header={<Mie.Header title="Title" subtitle="Subtitle" />}
                left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
                right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
                transparent
                accent="error"
              />
              <Mie.HeaderBar
                header={<Mie.Header title="Title" subtitle="Subtitle" />}
                left={<Mie.Button icon={<Mie.Icons.UserHome />} />}
                right={<Mie.Button icon={<Mie.Icons.UserTrash />} />}
                transparent
                accent="success"
              />
            </Mie.View>
          </Mie.View>
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}