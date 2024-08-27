import * as Mie from "@mielo-ui/mielo-react"
import { Code } from "../../components/Code"

const CORNERS = `
export type RoundSize = boolean | "none" | "tiny" | "small" | "large"

export interface LayoutRoundedProps {
  r?: RoundSize  // round all corners
  rt?: RoundSize // round top corners
  rb?: RoundSize // round bottom corners
  rl?: RoundSize // round left corners
  rr?: RoundSize // round right corners

  rtl?: RoundSize // round top left
  rtr?: RoundSize // round top right
  rbl?: RoundSize // round bottom left
  rbr?: RoundSize // round bottom right
}

// Mie.L.* used for any component with 
// layout feature support

// Its round all corners with default rounding size
<Mie.L.View r />

// Round top corners: left and right with large size
<Mie.L.View rt="large" />

// HTML
<div className="mie rb-large rt" />
`.trim()

export function CornersPage() {
  return (
    <div className="page">
      <Mie.Clamp
        header={
          <Mie.Header title="Layout" subtitle="Corners" size="large" center />
        }
      >
        <Mie.L.View f fc bg="content">
          <Code lang="tsx" code={CORNERS} />
        </Mie.L.View>
      </Mie.Clamp>
    </div>
  )
}