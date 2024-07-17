import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"
import { useState } from "react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"

const [time, setTime] = useState("day")

<Mie.Radio
  onChange={event => setTime(event.target.value)}
  checked={time === "day"}
  name="time"
  value="day"
  label="Day"
/>

<Mie.Radio
  onChange={event => setTime(event.target.value)}
  checked={time === "night"}
  name="time"
  value="night"
  label="Night"
/>
`.trim()

const ACCENT_TYPESCRIPT = `
<Mie.Radio
  name="radio-accent-1"
  label="Warning"
  accent="warning"
  value="warning"
  checked
/>

<Mie.Radio
  name="radio-accent-1"
  label="Success"
  accent="success"
  value="success"
  checked
/>

<Mie.Radio
  name="radio-accent-1"
  label="Error"
  accent="error"
  value="error"
  checked
/>
`.trim()

const SIZES_TYPESCRIPT = `
<Mie.Radio
  name="circular-accent-1"
  label="Large"
  accent="warning"
  size="large"
  checked
/>
<Mie.Radio
  name="circular-accent-3"
  label="Medium"
  accent="success"
  checked
/>
<Mie.Radio
  name="circular-accent-2"
  label="Small"
  accent="error"
  size="small"
  checked
/>
`.trim()

export function RadioPage() {
  const [time, setTime] = useState("day")

  return (
    <div className="page checkbox">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Radio"
            subtitle="Example of different checkbox & radio variants"
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
            <Mie.Radio
              onChange={event => setTime(event.target.value)}
              checked={time === "day"}
              name="time"
              value="day"
              label="Day"
            />
            <Mie.Radio
              onChange={event => setTime(event.target.value)}
              checked={time === "night"}
              name="time"
              value="night"
              label="Night"
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Accent"
          code={{
            jsx: ACCENT_TYPESCRIPT,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            column
            flex1
            flex
          >
            <Mie.Radio
              name="radio-accent-1"
              label="Warning"
              accent="warning"
              value="warning"
              checked
            />

            <Mie.Radio
              name="radio-accent-1"
              label="Success"
              accent="success"
              value="success"
              checked
            />

            <Mie.Radio
              name="radio-accent-1"
              label="Error"
              accent="error"
              value="error"
              checked
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Sizes"
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
            <Mie.Radio
              name="sizes-accent-1"
              label="Large"
              accent="warning"
              size="large"
              checked
            />
            <Mie.Radio
              name="sizes-accent-3"
              label="Medium"
              accent="success"
              checked
            />
            <Mie.Radio
              name="sizes-accent-2"
              label="Small"
              accent="error"
              size="small"
              checked
            />
          </Mie.View>
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}