import * as Mie from "mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function IndentsPage() {
  const examples = ["Default", "Accent", "Size"]

  return (
    <div className="page toggle">
      <Mie.Clamp header={<Mie.Header title="Corners" size="massive" center />}>
        {examples.map(name => (
          <ExampleGroup key={name} component={Examples[name]} />
        ))}
      </Mie.Clamp>
    </div>
  )
}