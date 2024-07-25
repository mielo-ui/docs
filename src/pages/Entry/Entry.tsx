import * as Mie from "mielo-react"

import { ExampleGroup } from "../../components"
import * as Examples from "./examples"

export function EntryPage() {
  const examples = ["Default", "Accent", "Size"]

  return (
    <div className="page entry">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Animated entry field element"
            title="Entry"
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