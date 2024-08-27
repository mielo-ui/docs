import * as Mie from "@mielo-ui/mielo-react"

import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function SliderPage() {
  const examples = ["Default", "Range", "Accent", "Vertical", "Size"]

  return (
    <div className="page radio">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="Draggable progress indicator"
            title="Slider"
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