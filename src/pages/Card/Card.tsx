import * as Mie from "mielo-react"

import { ExampleGroup } from "../../components"
import * as Examples from "./examples"

export function CardPage() {
  const examples = ["Default", "Accent", "Size"]

  return (
    <div className="page card">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Univeral content container"
            title="Card"
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