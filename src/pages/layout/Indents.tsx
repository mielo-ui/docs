import * as Mie from "@mielo-ui/mielo-react"
import { Code } from "../../components/Code"

const INDENTS = `
export type IndentSize =
  | boolean
  | "none"
  | "mini"
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "big"
  | "huge"
  | "massive"

export interface LayoutIndentPadding {
  p?: IndentSize // all sides
  ph?: IndentSize // horizontally
  pv?: IndentSize // vertically
  pt?: IndentSize // top
  pr?: IndentSize // right
  pb?: IndentSize // bottom
  pl?: IndentSize // left
}

export interface LayoutIndentMargin {
  m?: IndentSize // all sides
  mh?: IndentSize // horizontally
  mv?: IndentSize // vertically
  mt?: IndentSize // top
  mr?: IndentSize // right
  mb?: IndentSize // bottom
  ml?: IndentSize // left
}

export interface LayoutGap {
  g?: IndentSize // gap for all 
  gr?: IndentSize // gap row
  gc?: IndentSize // gap column
}

// Mie.L.* used for any component with 
// layout feature support

// Its: 
  // m  (margin) - default size margin all
  // pt (padding-top) - small inner top indent
  // ph (padding-horizontally) - large inner horizontal indent (left & right)
  // pb (padding-bottom) - none  
<Mie.L.View m="large" pt="small" ph="large" pb="none" />

// HTML
<div className="mie m-large pt-small ph-large pb-none" />
`.trim()

export function IndentsPage() {
  return (
    <div className="page">
      <Mie.Clamp
        header={
          <Mie.Header title="Layout" subtitle="Indents" size="large" center />
        }
      >
        <Mie.L.View f fc bg="content">
          <Code lang="tsx" code={INDENTS} />
        </Mie.L.View>
      </Mie.Clamp>
    </div>
  )
}