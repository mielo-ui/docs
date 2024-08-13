import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

export function Tabs() {
  const [tab, setTab] = useState("tab-1")

  const tabs = [
    {
      title: "Basic",
      name: "tab-1",
    },
    {
      title: "Interactive",
      name: "tab-2",
    },
    {
      title: "Custom",
      name: "tab-3",
    },
  ]

  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Tabs">
      <Mie.L.Header title="Tabs" size="small" mb="small" />

      <Mie.L.View
        className="card"
        fai="center"
        bg="panel"
        r="large"
        p="large"
        shadow
        sbv
        fc
        f
      >
        <Mie.Tabs
          onChange={setTab}
          selected={tab}
          shadow
          animated
          tabs={tabs}
        />

        <Mie.Tabs
          onChange={setTab}
          selected={tab}
          tabs={tabs}
          r="large"
          animated
          shadow
          tabProps={
            {
              shadow: true,
              ph: "large",
              pv: "tiny",
              r: "large",
            } as any
          }
        />
      </Mie.L.View>
    </Mie.L.View>
  )
} 