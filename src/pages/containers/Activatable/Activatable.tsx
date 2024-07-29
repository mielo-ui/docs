import * as Mie from "mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function ActivatablePage() {
  const examples = ["Default", "Accent", "Size"]

  return (
    <div className="page activatable">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Button from any element"
            title="Activatable"
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