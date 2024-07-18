import * as Mie from "mielo-react"

export function ExtendedDemoPage() {
  return (
    <div className="page buttons">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Extended Demo"
            subtitle="Simple apps using mieaita components"
            size="large"
            center
          />
        }
      >
        <Mie.Header title="Default" />
      </Mie.Clamp>
    </div>
  )
}