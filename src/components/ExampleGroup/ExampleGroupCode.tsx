import * as Mie from "mielo-react"
import { useState } from "react"
import { Code } from "../Code"

export interface ExampleCodeOptions {
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
        lang={tab === "ts" ? "tsx" : tab}
        code={code?.[tab]}
      />
    )
  }

  return (
    <Mie.Collapsible open={open} className="mie view f fc">
      <Mie.Tabs
        onChange={setTab}
        animated={true}
        selected={tab}
        transparent
        mv="large"
        mh="large"
        tabs={{
          ts: {
            title: "React",
            name: "ts",
          },
          html: {
            title: "HTML",
            name: "html",
          },
        }}
      />

      <Mie.L.View className="code" rt="none" rb="large" f fc>
        {codeContainer}
      </Mie.L.View>
    </Mie.Collapsible>
  )
}