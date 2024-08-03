import * as Mie from "@mielo-ui/mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function HeaderBarPage() {
  const examples = ["Default", "Accent", "Transparent"]

  return (
    <div className="page select">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Common app navigation menu"
            title="HeaderBar"
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