import * as Mie from "mielo-react"

import { ExampleGroup } from "../../components"
import * as Examples from "./examples"

export function TabsPage() {
  const examples = ["Default"]

  return (
    <div className="page tabs">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Activatable menu"
            title="Tabs"
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