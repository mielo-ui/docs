import * as Mie from "@mielo-ui/mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function DialogPage() {
  const examples = ["Default", "Confirm"]

  return (
    <div className="page dialog">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Alert window"
            title="Dialog"
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