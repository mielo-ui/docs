import * as Mie from "mielo-react"

import { ExampleGroup } from "../../components"
import * as Examples from "./examples"

export function RadioPage() {
  const examples = ["Default", "Accent", "Size"]

  return (
    <div className="page radio">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="A checkbox can be formatted as a radio element. This means it is an exclusive option."
            title="Radio"
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