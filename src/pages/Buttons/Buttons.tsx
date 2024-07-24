import * as Mie from "mielo-react"

import { ExampleGroup } from "../../components"
import * as Examples from "./examples"

export function ButtonPage() {
  const examples = [
    "Default",
    "Accent",
    "Fill",
    "Transparent",
    "Tertiary",
    "Pill",
    "Icon",
    "Group",
    "Size",
  ]

  return (
    <div className="page buttons">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Trigger elements"
            title="Button"
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