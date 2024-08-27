import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"
import { Code } from "../Code"

export interface ExampleCodeOptions {
  props?: string
  html?: string
  ts?: string
}

export interface ExampleGroupCodeProps {
  code?: ExampleCodeOptions
  open?: boolean
}

export function ExampleGroupCode({ code, open }: ExampleGroupCodeProps) {
  const defaultCodeKey = Object.keys(code)[0] || "ts"
  const [tab, setTab] = useState(defaultCodeKey)

  let codeContainer
  if (code && Object.keys(code).length > 0) {
    codeContainer = tab && code && (
      <Code
        className="mie rt-none"
        lang={["ts", "props"].includes(tab) ? "tsx" : tab}
        code={code?.[tab]}
      />
    )
  }

  const tabs = Object.assign(
    {},
    code?.ts && {
      ts: {
        title: "React",
        name: "ts",
      },
    },
    code?.props && {
      props: {
        title: "Props",
        name: "props",
      },
    },
    code?.html && {
      html: {
        title: "HTML",
        name: "html",
      },
    },
  )

  return (
    <Mie.Collapsible open={open} className="mie view f fc">
      <Mie.Tabs
        onChange={setTab}
        animated={true}
        selected={tab}
        transparent
        mv="small"
        mh="large"
        tabs={tabs}
        tabProps={
          {
            shadow: true,
            ph: "large",
            pv: "small",
            r: "large",
          } as any
        }
      />

      <Mie.L.View className="code" rt="none" rb="large" f fc>
        {codeContainer}
      </Mie.L.View>
    </Mie.Collapsible>
  )
}