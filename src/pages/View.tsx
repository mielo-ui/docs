import * as Mie from "mielo-react"
import { ComponentGroup } from "../components"

const DEFAULT_TYPESCRIPT = `

`.trim()

const DEFAULT_HTML = `

`.trim()

const ACCENT_TYPESCRIPT = `

`.trim()

const ACCENT_HTML = `

`.trim()

export function ViewPage() {
  return (
    <div className="page item">
      <Mie.Clamp
        header={
          <Mie.Header
            title="View"
            subtitle="Abstract layout view component"
            size="large"
            center
          />
        }
      >
        <ComponentGroup
          title="View"
          code={{
            jsx: DEFAULT_TYPESCRIPT,
            html: DEFAULT_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            column
            flex1
            flex
          >
            <div className="mie view padding flex column rounded"></div>
            <div className="mie view view-bg container-bg padding flex column rounded"></div>
            <div className="mie view container-bg padding flex column rounded"></div>
          </Mie.View>
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}