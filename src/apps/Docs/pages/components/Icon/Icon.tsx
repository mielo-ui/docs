import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

import { IconLibrary } from "../../../../IconLibrary"
import { ExampleGroup } from "../../../components"
import * as Examples from "./examples"

export function IconPage() {
  const [tab, setTab] = useState("Component")

  const examples = [
    "Default",
    "Accent",
    "Background",
    "Fill",
    "Rounded",
    "Size",
  ]

  return (
    <div className="page icons">
      <Mie.Clamp
        header={
          <Mie.Header
            subtitle="An icon is a glyph used to represent something else"
            title="Icon"
            size="large"
            center
          />
        }
      >
        <Mie.L.View f fjc="center">
          <Mie.Tabs
            tabProps={{ pv: "small", r: "large" } as any}
            onChange={setTab}
            selected={tab}
            mb="massive"
            r="large"
            animated
            shadow
            tabs={{
              Component: {
                title: "Component",
                name: "Component",
              },
              Library: {
                title: "Library",
                name: "Library",
              },
            }}
          />
        </Mie.L.View>

        {tab === "Library" && <IconLibrary />}

        {tab === "Component" &&
          examples.map(name => (
            <ExampleGroup key={name} component={Examples[name]} />
          ))}
      </Mie.Clamp>
    </div>
  )
}