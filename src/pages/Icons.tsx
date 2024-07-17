import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"

<Mie.Icon size="big" icon={<Mie.Icons.UserHome />} />
`.trim()

const DEFAULT_HTML = `
<div class="mie icon big">
  <svg />
</div>
`.trim()

const ACCENTS_TYPESCRIPT = `
<Mie.Icon
  icon={<Mie.Icons.DialogInformation />}
  size="big"
  accent 
/>

<Mie.Icon
  icon={<Mie.Icons.DialogWarning />}
  accent="warning" 
  size="big"
/>

<Mie.Icon
  icon={<Mie.Icons.DialogError />}
  accent="error" 
  size="big"
/>

<Mie.Icon
  icon={<Mie.Icons.EmblemOk />}
  accent="success" 
  size="big"
/>
`.trim()

const ACCENTS_HTML = `
<div class="mie icon big accent">
  <svg>
</div>

<div class="mie icon big warning">
  <svg>
</div>

<div class="mie icon big error">
  <svg>
</div>

<div class="mie icon big success">
  <svg>
</div>
`.trim()

const BG_TYPESCRIPT = `
<Mie.Icon
  icon={<Mie.Icons.DialogInformation />}
  space="large"
  size="big"
  accent
  bg
/>

<Mie.Icon
  icon={<Mie.Icons.DialogWarning />}
  accent="warning"
  space="large"
  size="big"
  bg
/>

<Mie.Icon
  icon={<Mie.Icons.DialogError />}
  accent="error"
  space="large"
  size="big"
  bg
/>

<Mie.Icon
  icon={<Mie.Icons.EmblemOk />}
  accent="success"
  space="large"
  size="big"
  bg
/>
`.trim()

const BG_HTML = `
<div class="mie icon big accent space-large bg">
  <svg>
</div>

<div class="mie icon big warning space-large bg">
  <svg>
</div>

<div class="mie icon big error space-large bg">
  <svg>
</div>

<div class="mie icon big success space-large bg">
  <svg>
</div>
`.trim()

const FILLED_TYPESCRIPT = `
<Mie.Icon
  icon={<Mie.Icons.DialogInformation />}
  space="large"
  size="big"
  accent
  filled
/>
<Mie.Icon
  icon={<Mie.Icons.DialogWarning />}
  accent="warning"
  space="large"
  size="big"
  filled
/>
<Mie.Icon
  icon={<Mie.Icons.DialogError />}
  accent="error"
  space="large"
  size="big"
  filled
/>
<Mie.Icon
  icon={<Mie.Icons.EmblemOk />}
  accent="success"
  space="large"
  size="big"
  filled
/>
`.trim()

const FILLED_HTML = `
<div class="mie icon big accent space-large filled">
  <svg>
</div>

<div class="mie icon big warning space-large filled">
  <svg>
</div>

<div class="mie icon big error space-large filled">
  <svg>
</div>

<div class="mie icon big success space-large filled">
  <svg>
</div>
`.trim()

const ROUNDED_TYPESCRIPT = `
<Mie.Icon
  icon={<Mie.Icons.DialogInformation />}
  rounded="small"
  space="large"
  size="big"
  accent
  bg
/>

<Mie.Icon
  icon={<Mie.Icons.DialogWarning />}
  accent="warning"
  space="large"
  size="huge"
  rounded
  bg
/>

<Mie.Icon
  icon={<Mie.Icons.DialogError />}
  accent="error"
  rounded="large"
  space="large"
  size="big"
  bg
/>

<Mie.Icon
  icon={<Mie.Icons.EmblemOk />}
  accent="success"
  rounded="circle"
  space="large"
  size="big"
  bg
/>
`.trim()

const ROUNDED_HTML = `
<div class="mie icon big accent space-large rounded-small bg">
  <svg>
</div>

<div class="mie icon huge warning space-large rounded bg">
  <svg>
</div>

<div class="mie icon big error space-large rounded-large bg">
  <svg>
</div>

<div class="mie icon big success space-large rounded-circle bg">
  <svg>
</div>
`.trim()

const SIZES_TYPESCRIPT = `
<Mie.Icon icon={<Mie.Icons.UserHome />} size="mini" />
<Mie.Icon icon={<Mie.Icons.UserHome />} size="tiny" />
<Mie.Icon icon={<Mie.Icons.UserHome />} size="small" />
<Mie.Icon icon={<Mie.Icons.UserHome />} />
<Mie.Icon icon={<Mie.Icons.UserHome />} size="large" />
<Mie.Icon icon={<Mie.Icons.UserHome />} size="big" />
<Mie.Icon icon={<Mie.Icons.UserHome />} size="huge" />
<Mie.Icon icon={<Mie.Icons.UserHome />} size="massive" />
`.trim()

const SIZES_HTML = `
<div class="mie icon mini">
  <svg>
</div>

<div class="mie icon tiny">
  <svg>
</div>

<div class="mie icon small">
  <svg>
</div>

<div class="mie icon">
  <svg>
</div>

<div class="mie icon large">
  <svg>
</div>

<div class="mie icon big">
  <svg>
</div>

<div class="mie icon huge">
  <svg>
</div>

<div class="mie icon massive">
  <svg>
</div>
`.trim()

export function IconsPage() {
  return (
    <div className="page icons">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Icons"
            subtitle="Example of different icons"
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
            alignItems="center"
            flex1
            flex
          >
            <Mie.Icon size="big" icon={<Mie.Icons.UserHome />} />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Accents"
          code={{
            jsx: ACCENTS_TYPESCRIPT,
            html: ACCENTS_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Icon
              accent
              size="big"
              icon={<Mie.Icons.DialogInformation />}
            />
            <Mie.Icon
              accent="warning"
              size="big"
              icon={<Mie.Icons.DialogWarning />}
            />
            <Mie.Icon
              accent="error"
              size="big"
              icon={<Mie.Icons.DialogError />}
            />
            <Mie.Icon
              accent="success"
              size="big"
              icon={<Mie.Icons.EmblemOk />}
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Background"
          code={{
            jsx: BG_TYPESCRIPT,
            html: BG_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Icon
              icon={<Mie.Icons.DialogInformation />}
              space="large"
              size="big"
              accent
              bg
            />
            <Mie.Icon
              icon={<Mie.Icons.DialogWarning />}
              accent="warning"
              space="large"
              size="big"
              bg
            />
            <Mie.Icon
              icon={<Mie.Icons.DialogError />}
              accent="error"
              space="large"
              size="big"
              bg
            />
            <Mie.Icon
              icon={<Mie.Icons.EmblemOk />}
              accent="success"
              space="large"
              size="big"
              bg
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Filled"
          code={{
            jsx: FILLED_TYPESCRIPT,
            html: FILLED_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Icon
              icon={<Mie.Icons.DialogInformation />}
              space="large"
              size="big"
              filled
              accent
            />
            <Mie.Icon
              icon={<Mie.Icons.DialogWarning />}
              accent="warning"
              space="large"
              size="big"
              filled
            />
            <Mie.Icon
              icon={<Mie.Icons.DialogError />}
              accent="error"
              space="large"
              size="big"
              filled
            />
            <Mie.Icon
              icon={<Mie.Icons.EmblemOk />}
              accent="success"
              space="large"
              size="big"
              filled
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Rounded"
          code={{
            jsx: ROUNDED_TYPESCRIPT,
            html: ROUNDED_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Icon
              icon={<Mie.Icons.DialogInformation />}
              rounded="small"
              space="large"
              size="big"
              accent
              bg
            />
            <Mie.Icon
              icon={<Mie.Icons.DialogWarning />}
              accent="warning"
              space="large"
              size="huge"
              rounded
              bg
            />
            <Mie.Icon
              icon={<Mie.Icons.DialogError />}
              accent="error"
              rounded="large"
              space="large"
              size="big"
              bg
            />
            <Mie.Icon
              icon={<Mie.Icons.EmblemOk />}
              accent="success"
              rounded="circle"
              space="large"
              size="big"
              bg
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Sizes"
          code={{
            jsx: SIZES_TYPESCRIPT,
            html: SIZES_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Icon icon={<Mie.Icons.UserHome />} size="mini" />
            <Mie.Icon icon={<Mie.Icons.UserHome />} size="tiny" />
            <Mie.Icon icon={<Mie.Icons.UserHome />} size="small" />
            <Mie.Icon icon={<Mie.Icons.UserHome />} />
            <Mie.Icon icon={<Mie.Icons.UserHome />} size="large" />
            <Mie.Icon icon={<Mie.Icons.UserHome />} size="big" />
            <Mie.Icon icon={<Mie.Icons.UserHome />} size="huge" />
            <Mie.Icon icon={<Mie.Icons.UserHome />} size="massive" />
          </Mie.View>
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}