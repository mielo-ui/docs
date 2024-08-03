import * as Mie from "@mielo-ui/mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function LabelPage() {
  const examples = [
    "Default",
    "Accent",
    "Size",
    "Circular",
    "Bordered",
    "Floating",
  ]

  return (
    <div className="page toggle">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Indicator element"
            title="Label"
            size="massive"
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