import * as Mie from "@mielo-ui/mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function RowPage() {
  const examples = ["Default", "Accent", "Entry", "Select", "Item"]

  return (
    <div className="page checkbox">
      <Mie.Clamp
        header={
          <Mie.Header subtitle="Styled list" title="Rows" size="large" center />
        }
      >
        {examples.map(name => (
          <ExampleGroup key={name} component={Examples[name]} />
        ))}
      </Mie.Clamp>
    </div>
  )
}