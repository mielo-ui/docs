import * as Mie from "@mielo-ui/mielo-react"
import { Code } from "../../../components/Code"

const FLEX = `
export interface LayoutFlexProps {
  // justify-content  
  fjc?: "start" | "end" | "stretch" | "center"
  
  // align-items
  fai?: "start" | "end" | "stretch" | "center"
  
  // display: flex
  f?: boolean
  
  // flex: 1
  f1?: boolean
  // flex-wrap
  fw?: boolean

  // flex-direction: colum
  fc?: boolean
  // flex-direction: row
  fr?: boolean
}

// Mie.L.* used for any component with 
// layout feature support

// Its: 
  // f - make flex container
  // fc - flex column
  // f1 - flex: 1
  // fai - align-items: center
  // fjc - justify-contemt: end
<Mie.L.View f fc f1 fai="center" fjc="end" />

// HTML
<div className="mie f fc f1 fai-center fjc-end" />
`.trim()

export function FlexPage() {
  return (
    <div className="page">
      <Mie.Clamp
        header={
          <Mie.Header title="Layout" subtitle="Flex" size="massive" center />
        }
      >
        <Mie.L.View f fc bg="content">
          <Code lang="tsx" code={FLEX} />
        </Mie.L.View>
      </Mie.Clamp>
    </div>
  )
}