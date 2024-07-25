import * as Mie from "mielo-react"

import { ExampleGroup } from "../../components"
import * as Examples from "./examples"

export function NotifyPage() {
  const examples = ["Default", "Accent", "Size"]

  return (
    <div className="page notify">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Notify toasts"
            title="Notify"
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