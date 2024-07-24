import * as Mie from "mielo-react"

import { ExampleGroup } from "../../components"
import * as Examples from "./examples"

export function IconPage() {
  const examples = [
    "Default",
    "Accent",
    "Background",
    "Fill",
    "Rounded",
    "Size",
  ]

  return (
    <div className="page icons">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="An icon is a glyph used to represent something else"
            title="Icon"
            size="large"
            center
          />
        }
      >
        {examples.map(name => (
          <ExampleGroup key={name} component={Examples[name]} />
        ))}
      </Mie.Clamp>
    </div>
  )
}