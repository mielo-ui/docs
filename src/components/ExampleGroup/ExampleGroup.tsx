import * as Mie from "@mielo-ui/mielo-react"

import { ExampleCodeOptions, ExampleGroupCode } from "./ExampleGroupCode"
import { useState } from "react"

export type ExampleComponent = {
  description?: string
  title: string

  code?: ExampleCodeOptions
  (): JSX.Element
}

export interface ExampleGroupProps {
  component: ExampleComponent
}

export function ExampleGroup({ component: Component }: ExampleGroupProps) {
  const { title, description, code } = Component as any
  const [codeOpen, setCodeOpen] = useState(false)

  return (
    <>
      <Mie.L.Header
        mb="small"
        size="small"
        title={title}
        subtitle={description as any}
      />

      <Mie.L.View
        className="example-group"
        shadow="outer"
        bg="content"
        r="large"
        fc
        f
      >
        <Mie.L.View className="preview" fjc="center" fai="center" rt="large" f>
          <Component />

          <Mie.L.Button
            onClick={() => setCodeOpen(prev => !prev)}
            className="show-code"
            accent={codeOpen ? "warning" : "success"}
            r="large"
            ph="big"
          >
            {codeOpen ? "Hide Code" : "Show Code"}
          </Mie.L.Button>
        </Mie.L.View>

        <ExampleGroupCode open={codeOpen} code={code} />
      </Mie.L.View>
    </>
  )
}