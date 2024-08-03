import * as Mie from "@mielo-ui/mielo-react"
import { Code } from "../../../components/Code"

const SHADOW = `
export type ShadowType = boolean | "inner" | "outer"

export interface LayoutShadowProps {
  shadow?: ShadowType
}

// Mie.L.* used for any component with 
// layout feature support

// Its: 
  // shadow - outer container shadow
<Mie.L.View shadow="outer" />

// HTML
<div className="mie shadow-outer" />
`.trim()

export function ShadowPage() {
  return (
    <div className="page">
      <Mie.Clamp
        header={
          <Mie.Header title="Layout" subtitle="Shadow" size="massive" center />
        }
      >
        <Mie.L.View f fc bg="content">
          <Code lang="tsx" code={SHADOW} />
        </Mie.L.View>
      </Mie.Clamp>
    </div>
  )
}