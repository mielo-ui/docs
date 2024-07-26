import * as Mie from "mielo-react"
import { useState } from "react"

import { ExampleGroup } from "../../../components"
import { Library } from "./Library"
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
            size="massive"
            center
          />
        }
      >
        <Mie.Tabs
          onChange={setTab}
          selected={tab}
          mb="massive"
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

        {tab === "Library" && <Library />}

        {tab === "Component" &&
          examples.map(name => (
            <ExampleGroup key={name} component={Examples[name]} />
          ))}
      </Mie.Clamp>
    </div>
  )
}