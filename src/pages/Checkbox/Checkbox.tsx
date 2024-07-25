import * as Mie from "mielo-react"

import { ExampleGroup } from "../../components"
import * as Examples from "./examples"

export function CheckboxPage() {
  const examples = ["Default", "Circular", "Accent", "Size"]

  return (
    <div className="page checkbox">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="A checkbox allows a user to select a value from a small set of options, often binary "
            title="Checkbox"
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