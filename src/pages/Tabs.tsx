import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"


`.trim()

const DEFAULT_HTML = `

`.trim()

export function TabPage() {
  return (
    <div className="page tabs">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Tabs"
            subtitle="Example of different tabs"
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
        ></ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}