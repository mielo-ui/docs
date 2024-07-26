import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Indeterminate.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Indeterminate() {
  return (
    <Mie.L.View f f1 fc p>
      <Mie.L.View f fc f1 sbv="large">
        <Mie.Header size="small" title="Default Bars" />

        <Mie.Progress accent>
          <Mie.Progress.Bar accent progress={100} indeterminate="pulsating" />
        </Mie.Progress>

        <Mie.Progress accent="error">
          <Mie.Progress.Bar
            accent="error"
            progress={80}
            indeterminate="filling"
          />
        </Mie.Progress>

        <Mie.Progress accent="warning">
          <Mie.Progress.Bar
            accent="warning"
            progress={60}
            indeterminate="sliding"
          />
        </Mie.Progress>

        <Mie.Progress accent="success">
          <Mie.Progress.Bar
            accent="success"
            progress={40}
            indeterminate="swinging"
          />
        </Mie.Progress>
      </Mie.L.View>

      <Mie.L.Header size="small" title="Transparent Bars" mt="massive" />

      <Mie.L.View f fc f1 sbv="large">
        <Mie.Progress accent>
          <Mie.Progress.Bar
            indeterminate="pulsating"
            progress={100}
            transparent
            accent
          />
        </Mie.Progress>

        <Mie.Progress accent="error">
          <Mie.Progress.Bar
            indeterminate="filling"
            progress={100}
            transparent
            accent="error"
          />
        </Mie.Progress>

        <Mie.Progress accent="warning">
          <Mie.Progress.Bar
            indeterminate="sliding"
            progress={100}
            transparent
            accent="warning"
          />
        </Mie.Progress>

        <Mie.Progress accent="success">
          <Mie.Progress.Bar
            indeterminate="swinging"
            progress={100}
            transparent
            accent="success"
          />
        </Mie.Progress>
      </Mie.L.View>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie view sample f f-1 justify-content-center fc">
  <div class="mie header size small">
    <div class="heading">
      <div class="title">Default Bars</div>
    </div>
  </div>

  <div class="mie progress accent">
    <div
      class="mie progress-bar indeterminate pulsating accent"
      style="width: 100%"
    >
      <div class="label">100%</div>
    </div>
  </div>

  <div class="mie progress error">
    <div
      class="mie progress-bar indeterminate filling error"
      style="width: 80%"
    >
      <div class="label">80%</div>
    </div>
  </div>

  <div class="mie progress warning">
    <div
    class="mie progress-bar indeterminate sliding warning"
      style="width: 60%"
    >
      <div class="label">60%</div>
    </div>
  </div>

  <div class="mie progress success">
    <div
    class="mie progress-bar indeterminate swinging success"
      style="width: 40%"
    >
      <div class="label">40%</div>
    </div>
  </div>
</div>

<div class="mie header size small">
  <div class="heading">
    <div class="title">Transparent Bars</div>
  </div>
</div>

<div class="mie view sample f f-1 justify-content-center fc">
  <div class="mie progress accent">
    <div
    class="mie progress-bar indeterminate pulsating accent transparent"
      style="width: 100%"
    >
      <div class="label">100%</div>
    </div>
  </div>

  <div class="mie progress error">
    <div
    class="mie progress-bar indeterminate filling error transparent"
      style="width: 100%"
    >
      <div class="label">100%</div>
    </div>
  </div>

  <div class="mie progress warning">
    <div
    class="mie progress-bar indeterminate sliding warning transparent"
      style="width: 100%"
    >
      <div class="label">100%</div>
    </div>
  </div>

  <div class="mie progress success">
    <div
    class="mie progress-bar indeterminate swinging success transparent"
      style="width: 100%"
    >
      <div class="label">100%</div>
    </div>
  </div>
</div>
`.trim()

export default Object.assign(Indeterminate, {
  title: "Indeterminate",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})