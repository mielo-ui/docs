import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"

// ...

<Mie.Checkbox
  name="checkbox-default-1"
  label="Default"
/>

<Mie.Checkbox
  name="checkbox-default-2"
  label="Default Checked"
  checked
/>
`.trim()

const DEFAULT_HTML = `
<div class="mie checkbox">
  <input class="input" id="toggle_checkbox-default-1" type="checkbox" />
  
  <label class="label" for="toggle_checkbox-default-1">
    <div class="indicator">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Default</div>
  </label>
</div>

<div class="mie checkbox">
  <input
    id="toggle_checkbox-default-2"
    type="checkbox"
    class="input"
    checked=""
  />

  <label class="label" for="toggle_checkbox-default-2">
    <div class="indicator checked">
      <div class="icon">
        <svg />
      </div>
    </div>

    <div class="content">Default Checked</div>
  </label>
</div>
`.trim()

const CIRCULAR_TYPESCRIPT = `
<Mie.Checkbox
  name="checkbox-default-1"
  label="Default"
  circular
/>

<Mie.Checkbox
  name="checkbox-default-2"
  label="Default Checked"
  circular
  checked
/>
`.trim()

const CIRCULAR_HTML = `
<div class="mie checkbox circular">
  <input class="input" id="toggle_checkbox-default-1" type="checkbox" />
  
  <label class="label" for="toggle_checkbox-default-1">
    <div class="indicator">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Default</div>
  </label>
</div>

<div class="mie checkbox circular">
  <input
    id="toggle_checkbox-default-2"
    type="checkbox"
    class="input"
    checked=""
  />

  <label class="label" for="toggle_checkbox-default-2">
    <div class="indicator checked">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Default Checked</div>
  </label>
</div>
`.trim()

const ACCENTS_TYPESCRIPT = `
<Mie.Checkbox
  name="circular-accent-1"
  label="Warning"
  accent="warning"
  cicrular
  checked
/>

<Mie.Checkbox
  name="circular-accent-3"
  label="Success"
  accent="success"
  cicrular
  checked
/>

<Mie.Checkbox
  name="circular-accent-2"
  label="Error"
  accent="error"
  cicrular
  checked
/>
`.trim()

const ACCENTS_HTML = `
<div class="mie checkbox warning">
  <input class="input" id="accents_checkbox-default-1" type="checkbox" />
  
  <label class="label" for="accents_checkbox-default-1">
    <div class="indicator">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Warning</div>
  </label>
</div>

<div class="mie checkbox success">
  <input
    id="accents_checkbox-default-2"
    type="checkbox"
    class="input"
    checked=""
  />

  <label class="label" for="accents_checkbox-default-2">
    <div class="indicator checked">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Success</div>
  </label>
</div>

<div class="mie checkbox error">
  <input
    id="accents_checkbox-default-2"
    type="checkbox"
    class="input"
    checked=""
  />

  <label class="label" for="accents_checkbox-default-3">
    <div class="indicator checked">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Error</div>
  </label>
</div>
`.trim()

const SIZES_TYPESCRIPT = `
<Mie.Checkbox
  name="circular-accent-2"
  label="Small"
  accent="error"
  size="small"
  checked
/>

<Mie.Checkbox
  name="circular-accent-3"
  label="Medium"
  accent="success"
  checked
/>

<Mie.Checkbox
  name="circular-accent-1"
  label="Large"
  accent="warning"
  size="large"
  checked
/>
`.trim()

const SIZES_HTML = `
<div class="mie checkbox small warning">
  <input class="input" id="accents_checkbox-default-1" type="checkbox" />
  
  <label class="label" for="accents_checkbox-default-1">
    <div class="indicator">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Small</div>
  </label>
</div>

<div class="mie checkbox success">
  <input
    id="accents_checkbox-default-2"
    type="checkbox"
    class="input"
    checked=""
  />

  <label class="label" for="accents_checkbox-default-2">
    <div class="indicator checked">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Medium</div>
  </label>
</div>

<div class="mie checkbox large error">
  <input
    id="accents_checkbox-default-2"
    type="checkbox"
    class="input"
    checked=""
  />

  <label class="label" for="accents_checkbox-default-3">
    <div class="indicator checked">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Large</div>
  </label>
</div>
`.trim()

export function CheckboxPage() {
  return (
    <div className="page checkbox">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Checkbox"
            subtitle="Different checkbox variants"
            size="large"
            center
          />
        }
      >
        <ComponentGroup
          containerColumn
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
            <Mie.Checkbox name="checkbox-default-1" label="Default" />

            <Mie.Checkbox
              name="checkbox-default-2"
              label="Default Checked"
              checked
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Circular"
          code={{
            jsx: CIRCULAR_TYPESCRIPT,
            html: CIRCULAR_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            column
            flex1
            flex
          >
            <Mie.Checkbox name="checkbox-default-1" label="Default" cicrular />

            <Mie.Checkbox
              name="checkbox-default-2"
              label="Default Checked"
              cicrular
              checked
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Accents"
          code={{
            jsx: ACCENTS_TYPESCRIPT,
            html: ACCENTS_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            column
            flex1
            flex
          >
            <Mie.Checkbox
              name="accents-accent-1"
              label="Warning"
              accent="warning"
              cicrular
              checked
            />
            <Mie.Checkbox
              name="accents-accent-2"
              label="Success"
              accent="success"
              cicrular
              checked
            />
            <Mie.Checkbox
              name="accents-accent-3"
              label="Error"
              accent="error"
              cicrular
              checked
            />
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
            <Mie.Checkbox
              name="circular-accent-2"
              label="Small"
              accent="error"
              size="small"
              checked
            />
            <Mie.Checkbox
              name="circular-accent-3"
              label="Medium"
              accent="success"
              checked
            />
            <Mie.Checkbox
              name="circular-accent-1"
              label="Large"
              accent="warning"
              size="large"
              checked
            />
          </Mie.View>
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}