import * as Mie from "mielo-react"

import { ExampleGroup } from "../../components"
import * as Examples from "./examples"

export function ItemPage() {
  const examples = ["Default", "Accent", "Size"]

  return (
    <div className="page item">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Univeral content component"
            title="Item"
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