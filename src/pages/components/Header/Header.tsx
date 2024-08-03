import * as Mie from "@mielo-ui/mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function HeaderPage() {
  const examples = ["Default", "Icon", "Center", "Inverted", "Accent", "Size"]

  return (
    <div className="page header">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="A header provides a short summary of content"
            title="Header"
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