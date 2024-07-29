import * as Mie from "mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function CollapsiblePage() {
  const examples = ["Default", "Accent", "Size"]

  return (
    <div className="page collapsible">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Animated hide container"
            title="Collapsible"
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