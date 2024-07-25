import * as Mie from "mielo-react"

import { ExampleCodeOptions, ExampleGroupCode } from "./Code"

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

  return (
    <>
      <Mie.Header size="large" title={title} subtitle={description as any} />

      <Mie.L.View
        className="example-group"
        shadow="outer"
        r="large"
        content
        fc
        f
      >
        <Mie.L.View
          fjc="center"
          fai="center"
          className="preview"
          rt="large"
          f
        >
          <Component />
        </Mie.L.View>

        <ExampleGroupCode code={code} />
      </Mie.L.View>
    </>
  )
}