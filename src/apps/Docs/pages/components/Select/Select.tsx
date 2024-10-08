import * as Mie from "@mielo-ui/mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function SelectPage() {
  const examples = ["Default", "Accent", "Rounded", "Size", "Custom"]

  return (
    <div className="page select">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Select field element"
            title="Select"
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