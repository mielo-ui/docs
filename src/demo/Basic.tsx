import * as Mie from "mielo-react"

export function BasicDemoPage() {
  return (
    <div className="page buttons">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Basic Demo"
            subtitle="Simple apps using mieaita components"
            size="large"
            center
          />
        }
      >
        <Mie.Header title="Default" size="medium" />

        <Mie.Segment placeholder="dev">
          <div className="inline-flex"></div>
        </Mie.Segment>
      </Mie.Clamp>
    </div>
  )
}