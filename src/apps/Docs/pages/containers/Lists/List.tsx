import * as Mie from "@mielo-ui/mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function ListPage() {
  const examples = ["Default", "Accent", "Size", "Variants"]

  return (
    <div className="page list">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Universal list component"
            title="List"
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