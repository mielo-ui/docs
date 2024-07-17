import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"

<Mie.Message
  title="Basic"
/>

<Mie.Message
  title="With description"
  description="Message description text..."
/>
`.trim()

const BANNER_TYPESCRIPT = `
<Mie.Message
  title="Banner"
  description="Message description text..."
  banner
/>
`.trim()

const ICON_TYPESCRIPT = `
<Mie.Message
  title="With description"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  icon={<Mie.Icon size="large" icon={<Mie.Icons.EmblemOk />} />}
  onClose={() => {}}
/>
`.trim()

const ACCENT_TYPESCRIPT = `
<Mie.Message
  title="With description"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  onClose={() => {}}
  accent
/>
<Mie.Message
  title="With description"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  onClose={() => {}}
  accent="warning"
/>
<Mie.Message
  title="With description"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  onClose={() => {}}
  accent="error"
/>
<Mie.Message
  title="With description"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  onClose={() => {}}
  accent="success"
/>
`.trim()

const SIZES_TYPESCRIPT = `
<Mie.Message
  title="Message Title"
  description="Message description text..."
  size="tiny"
/>
<Mie.Message
  title="Message Title"
  description="Message description text..."
  size="small"
/>
<Mie.Message
  title="Message Title"
  description="Message description text..."
/>
<Mie.Message
  title="Message Title"
  description="Message description text..."
  size="large"
/>
<Mie.Message
  title="Message Title"
  description="Message description text..."
  size="big"
/>
<Mie.Message
  title="Message Title"
  description="Message description text..."
  size="huge"
/>
<Mie.Message
  title="Message Title"
  description="Message description text..."
  size="massive"
/>
`.trim()

export function MessagePage() {
  return (
    <div className="page messages">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Message"
            subtitle="Example of different messages"
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
          <Mie.View bg="transparent" flex column>
            <Mie.Message
              title="With description"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              onClose={() => {}}
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Banner"
          code={{
            jsx: BANNER_TYPESCRIPT,
          }}
        >
          <Mie.Message
            title="Banner"
            description="Message description text..."
            banner
          />
        </ComponentGroup>

        <ComponentGroup
          title="Icon"
          code={{
            jsx: ICON_TYPESCRIPT,
          }}
        >
          <Mie.Message
            title="With description"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            icon={<Mie.Icon size="large" icon={<Mie.Icons.EmblemOk />} />}
            onClose={() => {}}
          />
        </ComponentGroup>

        <ComponentGroup
          title="Accent"
          code={{
            jsx: ACCENT_TYPESCRIPT,
          }}
        >
          <Mie.View bg="transparent" flex column>
            <Mie.Message
              title="With description"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              icon={
                <Mie.Icon size="large" icon={<Mie.Icons.DialogInformation />} />
              }
              onClose={() => {}}
              accent
            />

            <Mie.Message
              title="With description"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              icon={
                <Mie.Icon size="large" icon={<Mie.Icons.DialogWarning />} />
              }
              onClose={() => {}}
              accent="warning"
            />

            <Mie.Message
              title="With description"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              icon={<Mie.Icon size="large" icon={<Mie.Icons.DialogError />} />}
              onClose={() => {}}
              accent="error"
            />

            <Mie.Message
              title="With description"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              icon={<Mie.Icon size="large" icon={<Mie.Icons.EmblemOk />} />}
              onClose={() => {}}
              accent="success"
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Sizes"
          code={{
            jsx: SIZES_TYPESCRIPT,
          }}
        >
          <Mie.View bg="transparent" flex column>
            <Mie.Message
              icon={<Mie.Icon size="tiny" icon={<Mie.Icons.FolderNew />} />}
              description="Message description text..."
              title="Message Title"
              size="tiny"
            />
            <Mie.Message
              icon={<Mie.Icon size="small" icon={<Mie.Icons.FolderNew />} />}
              description="Message description text..."
              title="Message Title"
              size="small"
            />
            <Mie.Message
              icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
              description="Message description text..."
              title="Message Title"
            />
            <Mie.Message
              icon={<Mie.Icon size="large" icon={<Mie.Icons.FolderNew />} />}
              description="Message description text..."
              title="Message Title"
              size="large"
            />
            <Mie.Message
              icon={<Mie.Icon size="big" icon={<Mie.Icons.FolderNew />} />}
              description="Message description text..."
              title="Message Title"
              size="big"
            />
            <Mie.Message
              icon={<Mie.Icon size="huge" icon={<Mie.Icons.FolderNew />} />}
              description="Message description text..."
              title="Message Title"
              size="huge"
            />
            <Mie.Message
              icon={<Mie.Icon size="massive" icon={<Mie.Icons.FolderNew />} />}
              description="Message description text..."
              title="Message Title"
              size="massive"
            />
          </Mie.View>
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}