import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function Progress() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Progress">
      <Mie.L.Header title="Progress" size="small" mb="small" />

      <Mie.L.View
        className="card"
        gr="massive"
        bg="panel"
        r="large"
        p="large"
        shadow
        fc
        f
      >
        <Mie.L.View f fc f1 gr="small">
          <Mie.Progress size="small">
            <Mie.Progress.Bar progress={35} />
          </Mie.Progress>

          <Mie.Progress>
            <Mie.Progress.Bar progress={65} />
          </Mie.Progress>
        </Mie.L.View>

        <Mie.L.View f fc f1 gr="small">
          <Mie.Progress size="small" multiple>
            <Mie.Progress.Bar accent="error" progress={25} />
            <Mie.Progress.Bar accent="warning" progress={18} />
            <Mie.Progress.Bar accent="success" progress={40} />
          </Mie.Progress>

          <Mie.Progress multiple>
            <Mie.Progress.Bar accent="error" progress={30} />
            <Mie.Progress.Bar accent="warning" progress={20} />
            <Mie.Progress.Bar accent="success" progress={15} />
          </Mie.Progress>
        </Mie.L.View>

        <Mie.L.View f fc f1 gr="small">
          <Mie.Progress size="small" accent>
            <Mie.Progress.Bar
              indeterminate="pulsating"
              progress={100}
              transparent
              accent
            />
          </Mie.Progress>

          <Mie.Progress size="small" accent="error">
            <Mie.Progress.Bar
              indeterminate="filling"
              progress={100}
              transparent
              accent="error"
            />
          </Mie.Progress>

          <Mie.Progress size="small" accent="warning">
            <Mie.Progress.Bar
              indeterminate="sliding"
              progress={100}
              transparent
              accent="warning"
            />
          </Mie.Progress>

          <Mie.Progress size="small" accent="success">
            <Mie.Progress.Bar
              indeterminate="swinging"
              progress={100}
              transparent
              accent="success"
            />
          </Mie.Progress>
        </Mie.L.View>
      </Mie.L.View>
    </Mie.L.View>
  )
} 