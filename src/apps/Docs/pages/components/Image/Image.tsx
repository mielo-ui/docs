import * as Mie from "@mielo-ui/mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function ImagePage() {
  const examples = ["Default", "Accent", "Background", "Rounded", "Size"]

  return (
    <div className="page images">
      <Mie.Clamp header={<Mie.Header title="Image" size="large" center />}>
        {examples.map(name => (
          <ExampleGroup key={name} component={Examples[name]} />
        ))}
      </Mie.Clamp>
    </div>
  )
}