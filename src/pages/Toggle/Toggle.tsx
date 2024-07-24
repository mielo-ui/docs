import * as Mie from "mielo-react"

import { ExampleGroup } from "../../components"
import * as Examples from "./examples"

export function TogglePage() {
  const examples = ["Default", "Accent", "Size"]

  return (
    <div className="page toggle">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="A toggle checkbox allows a user to select a value from a small set of options, often binary "
            title="Toggle"
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