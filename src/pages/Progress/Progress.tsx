import * as Mie from "mielo-react"

import { ExampleGroup } from "../../components"
import * as Examples from "./examples"

export function ProgressPage() {
  const examples = ["Default", "Accent", "Multiple", "Indeterminate", "Size"]

  return (
    <div className="page progress">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Component indicate processes progress"
            title="Progress"
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