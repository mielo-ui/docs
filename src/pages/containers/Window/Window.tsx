import * as Mie from "@mielo-ui/mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function WindowPage() {
  const examples = ["Default", "Accent", "Split"]

  return (
    <div className="page notify">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Common app container"
            title="Window"
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