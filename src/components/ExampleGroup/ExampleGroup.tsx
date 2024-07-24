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
        column
        flex
      >
        <Mie.L.View
          justifyContent="center"
          alignItems="center"
          className="preview"
          rt="large"
          flex
        >
          <Component />
        </Mie.L.View>

        <ExampleGroupCode code={code} />
      </Mie.L.View>
    </>
  )
}