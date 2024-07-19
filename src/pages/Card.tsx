import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"


`.trim()

const DEFAULT_HTML = `

`.trim()

export function CardPage() {
  return (
    <div className="page cards">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Card"
            subtitle="Example of different cards"
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