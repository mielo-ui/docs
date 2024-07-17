import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"

// ...

<Mie.Checkbox
  name="checkbox-default-1"
  label="Default"
  toggle
/>

<Mie.Checkbox
  name="checkbox-default-2"
  label="Default Checked"
  checked
  toggle
/>
`.trim()

const ICON_TYPESCRIPT = `
<Mie.Checkbox
  label="Toggle Indicator Icon"
  name="toggle-default-3"
  toggle
  icon={{
    indicator: {
      unchecked: <Mie.Icons.WeatherClearNight />,
      checked: <Mie.Icons.WeatherClear />,
    },
  }}
/>

<Mie.Checkbox
  label="Toggle Layout Icon"
  name="toggle-default-4"
  toggle
  icon={{
    layout: {
      unchecked: <Mie.Icons.WeatherClearNight />,
      checked: <Mie.Icons.WeatherClear />,
    },
  }}
/>
`.trim()

const ACCENTS_TYPESCRIPT = `
<Mie.Checkbox
  name="circular-accent-1"
  label="Warning"
  accent="warning"
  checked
  toggle
/>

<Mie.Checkbox
  name="circular-accent-3"
  label="Success"
  accent="success"
  checked
  toggle
/>

<Mie.Checkbox
  name="circular-accent-2"
  label="Error"
  accent="error"
  checked
  toggle
/>
`.trim()

const SIZES_TYPESCRIPT = `
<Mie.Checkbox
  name="circular-accent-2"
  label="Small"
  accent="warning"
  size="small"
  checked
  toggle
/>

<Mie.Checkbox
  name="circular-accent-3"
  label="Medium"
  accent="error"
  checked
  toggle
/>

<Mie.Checkbox
  name="circular-accent-1"
  label="Large"
  accent="success"
  size="large"
  checked
  toggle
/>
`.trim()

export function TogglePage() {
  return (
    <div className="page checkbox">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Toggle"
            subtitle="Different toggle variants"
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
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            column
            flex1
            flex
          >
            <Mie.Checkbox name="checkbox-default-1" label="Default" toggle />

            <Mie.Checkbox
              name="checkbox-default-2"
              label="Default Checked"
              checked
              toggle
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Icon"
          code={{
            jsx: ICON_TYPESCRIPT,
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
              label="Toggle Indicator Icon"
              name="toggle-default-3"
              toggle
              icon={{
                indicator: {
                  unchecked: <Mie.Icons.WeatherClearNight />,
                  checked: <Mie.Icons.WeatherClear />,
                },
              }}
            />

            <Mie.Checkbox
              label="Toggle Layout Icon"
              name="toggle-default-4"
              toggle
              icon={{
                layout: {
                  unchecked: <Mie.Icons.WeatherClearNight />,
                  checked: <Mie.Icons.WeatherClear />,
                },
              }}
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Accents"
          code={{
            jsx: ACCENTS_TYPESCRIPT,
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
              name="circular-accent-1"
              label="Warning"
              accent="warning"
              checked
              toggle
            />
            <Mie.Checkbox
              name="circular-accent-3"
              label="Success"
              accent="success"
              checked
              toggle
            />
            <Mie.Checkbox
              name="circular-accent-2"
              label="Error"
              accent="error"
              checked
              toggle
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="SIzes"
          code={{
            jsx: SIZES_TYPESCRIPT,
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
              accent="warning"
              size="small"
              checked
              toggle
            />
            <Mie.Checkbox
              name="circular-accent-3"
              label="Medium"
              accent="error"
              checked
              toggle
            />
            <Mie.Checkbox
              name="circular-accent-1"
              label="Large"
              accent="success"
              size="large"
              checked
              toggle
            />
          </Mie.View>
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}