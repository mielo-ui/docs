import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"

<Mie.Progress>
  <Mie.Progress.Bar progress={35} />
</Mie.Progress>

<Mie.Progress>
  <Mie.Progress.Bar progress={65} progressVisible />
</Mie.Progress>
`.trim()

const DEFAULT_HTML = `
<div class="mie progress">
  <div style="width: 35%" class="mie progress-bar">
    <div class="label">35%</div>
  </div>
</div>

<div class="mie progress">
  <div style="width: 65%" class="mie progress-bar">
    <div class="label visible">65%</div>
  </div>
</div>
`.trim()

const ACCENT_TYPESCRIPT = `
<Mie.Progress accent>
  <Mie.Progress.Bar progress={40} />
</Mie.Progress>

<Mie.Progress accent="warning">
  <Mie.Progress.Bar progress={60} />
</Mie.Progress>

<Mie.Progress accent="error">
  <Mie.Progress.Bar progress={60} />
</Mie.Progress>

<Mie.Progress accent="success">
  <Mie.Progress.Bar progress={60} />
</Mie.Progress>
`.trim()

const ACCENT_HTML = `
<div class="mie progress accent">
  <div style="width: 40%" class="mie progress-bar accent">
    <div class="label">40%</div>
  </div>
</div>

<div class="mie progress warning">
  <div style="width: 60%" class="mie progress-bar warning">
    <div class="label">60%</div>
  </div>
</div>

<div class="mie progress error">
  <div style="width: 60%" class="mie progress-bar error">
    <div class="label">60%</div>
  </div>
</div>

<div class="mie progress success">
  <div style="width: 60%" class="mie progress-bar success">
    <div class="label">60%</div>
  </div>
</div>
`.trim()

const SIZES_TYPESCRIPT = `
<Mie.Progress size="small">
  <Mie.Progress.Bar progress={40} />
</Mie.Progress>

<Mie.Progress>
  <Mie.Progress.Bar progress={60} />
</Mie.Progress>

<Mie.Progress size="large">
  <Mie.Progress.Bar progress={80} />
</Mie.Progress>
`.trim()

const SIZES_HTML = `
<div class="mie progress small">
  <div style="width: 40%" class="mie progress-bar">
    <div class="label">40%</div>
  </div>
</div>

<div class="mie progress">
  <div style="width: 60%" class="mie progress-bar">
    <div class="label">60%</div>
  </div>
</div>

<div class="mie progress large">
  <div style="width: 80%" class="mie progress-bar">
    <div class="label">80%</div>
  </div>
</div>
`.trim()

const MULTIPLE_TYPESCRIPT = `
<Mie.Progress multiple>
  <Mie.Progress.Bar accent="error" progress={25} />
  <Mie.Progress.Bar accent="warning" progress={18} />
  <Mie.Progress.Bar accent="success" progress={40} />
</Mie.Progress>

<Mie.Progress multiple>
  <Mie.Progress.Bar 
    progressVisible
    accent="error"
    progress={30}
  />

  <Mie.Progress.Bar
    progressVisible
    accent="warning"
    progress={20}
  />

  <Mie.Progress.Bar
    progressVisible
    accent="success"
    progress={15}
  />
</Mie.Progress>
`.trim()

const MULTIPLE_HTML = `
<div class="mie progress multiple">
  <div style="width: 25%" class="mie progress-bar error">
    <div class="label">25%</div>
  </div>

  <div style="width: 18%" class="mie progress-bar warning">
    <div class="label">18%</div>
  </div>

  <div style="width: 40%" class="mie progress-bar success">
    <div class="label">40%</div>
  </div>
</div>

<div class="mie progress multiple">
  <div style="width: 30%" class="mie progress-bar error">
    <div class="label visible">30%</div>
  </div>

  <div style="width: 20%" class="mie progress-bar warning">
    <div class="label visible">20%</div>
  </div>

  <div style="width: 15%" class="mie progress-bar success">
    <div class="label visible">15%</div>
  </div>
</div>
`.trim()

const INDETERMINATE_TYPESCRIPT = `
<Mie.View
  justifyContent="center"
  column
  flex1
  flex
>
  <Mie.Header size="small" title="Default Bars" />

  <Mie.Progress accent>
    <Mie.Progress.Bar
      accent
      progress={100}
      indeterminate="pulsating"
    />
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
</Mie.View>

<Mie.Header size="small" title="Transparent Bars" />

<Mie.View
  justifyContent="center"
  column
  flex1
  flex
>
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
</Mie.View>
`.trim()

const INDETERMINATE_HTML = `
<div class="mie view sample flex flex-1 justify-content-center column">
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

<div class="mie view sample flex flex-1 justify-content-center column">
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

export function ProgressPage() {
  return (
    <div className="page progress">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Progress"
            subtitle="Example of different progress"
            size="large"
            center
          />
        }
      >
        <ComponentGroup
          title="Default"
          code={{
            jsx: DEFAULT_TYPESCRIPT,
            html: DEFAULT_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            column
            flex1
            flex
          >
            <Mie.Progress>
              <Mie.Progress.Bar progress={35} />
            </Mie.Progress>

            <Mie.Progress>
              <Mie.Progress.Bar progress={65} progressVisible />
            </Mie.Progress>
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Accent"
          code={{
            jsx: ACCENT_TYPESCRIPT,
            html: ACCENT_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            column
            flex1
            flex
          >
            <Mie.Progress accent>
              <Mie.Progress.Bar accent progress={40} />
            </Mie.Progress>

            <Mie.Progress accent="warning">
              <Mie.Progress.Bar accent="warning" progress={60} />
            </Mie.Progress>

            <Mie.Progress accent="error">
              <Mie.Progress.Bar accent="error" progress={60} />
            </Mie.Progress>

            <Mie.Progress accent="success">
              <Mie.Progress.Bar accent="success" progress={60} />
            </Mie.Progress>
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Sizes"
          code={{
            jsx: SIZES_TYPESCRIPT,
            html: SIZES_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            column
            flex1
            flex
          >
            <Mie.Progress size="small">
              <Mie.Progress.Bar progress={40} />
            </Mie.Progress>

            <Mie.Progress>
              <Mie.Progress.Bar progress={60} />
            </Mie.Progress>

            <Mie.Progress size="large">
              <Mie.Progress.Bar progress={80} />
            </Mie.Progress>
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Multiple"
          code={{
            jsx: MULTIPLE_TYPESCRIPT,
            html: MULTIPLE_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            column
            flex1
            flex
          >
            <Mie.Progress multiple>
              <Mie.Progress.Bar accent="error" progress={25} />
              <Mie.Progress.Bar accent="warning" progress={18} />
              <Mie.Progress.Bar accent="success" progress={40} />
            </Mie.Progress>

            <Mie.Progress multiple>
              <Mie.Progress.Bar progressVisible accent="error" progress={30} />
              <Mie.Progress.Bar
                progressVisible
                accent="warning"
                progress={20}
              />
              <Mie.Progress.Bar
                progressVisible
                accent="success"
                progress={15}
              />
            </Mie.Progress>
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Indeterminate"
          code={{
            jsx: INDETERMINATE_TYPESCRIPT,
            html: INDETERMINATE_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            column
            flex1
            flex
          >
            <Mie.Header size="small" title="Default Bars" />

            <Mie.Progress accent>
              <Mie.Progress.Bar
                accent
                progress={100}
                indeterminate="pulsating"
              />
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
          </Mie.View>

          <Mie.Header size="small" title="Transparent Bars" />

          <Mie.View
            className="sample"
            justifyContent="center"
            column
            flex1
            flex
          >
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
          </Mie.View>
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}