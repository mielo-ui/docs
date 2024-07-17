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

export function NotifyPage() {
  return (
    <div className="page notify">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Notify"
            subtitle="Example of different notify"
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
          <Mie.Button label="Button" />
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}