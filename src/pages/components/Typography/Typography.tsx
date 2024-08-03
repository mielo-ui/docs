import * as Mie from "@mielo-ui/mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function TypographyPage() {
  const examples = ["Default", "Titles", "Accent"]

  return (
    <div className="page typography">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Example of different tabs"
            title="Tabs"
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