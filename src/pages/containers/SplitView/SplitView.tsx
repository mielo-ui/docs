import * as Mie from "@mielo-ui/mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function SplitViewPage() {
  const examples = ["Default", "Accent"]

  return (
    <div className="page notify">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Container with sidebar"
            title="SplitView"
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