import * as Mie from "mielo-react"

import { ExampleGroup } from "../../components"
import * as Examples from "./examples"

export function MessagePage() {
  const examples = ["Default", "Accent", "Icon", "Size"]

  return (
    <div className="page message">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Alert information component"
            title="Message"
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