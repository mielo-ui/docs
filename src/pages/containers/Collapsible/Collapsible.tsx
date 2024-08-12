import * as Mie from "@mielo-ui/mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function CollapsiblePage() {
  const examples = ["Default"]

  return (
    <div className="page collapsible">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Animated hide container"
            title="Collapsible"
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