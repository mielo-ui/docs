import { useState } from "react"

import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"

const [value, setValue] = useState(50)

<Mie.Slider
  onChange={nextValue => setValue(nextValue)}
  value={value}
  max={100}
  min={0}
/>
`.trim()

const RANGE_TYPESCRIPT = `
const [value, setValue] = useState({
  max: 30,
  min: 60,
})

<Mie.RangeSlider
  onChange={nextValue => setValue(nextValue)}
  value={value}
  step={1}
  max={100}
  min={0}
/>
`.trim()

const VERTICAL_TYPESCRIPT = `
const [first, setFirst] = useState(50)
const [second, setSecond] = useState({
  max: 30,
  min: 60,
})

<Mie.Slider
  onChange={nextValue => setFirst(nextValue)}
  orientation="vertical"
  value={first}
  max={100}
  min={0}
/>

<Mie.RangeSlider
  onChange={nextValue => setSecond(nextValue)}
  orientation="vertical"
  value={second}
  step={1}
  max={100}
  min={0}
/>
`

const ACCENTS_TYPESCRIPT = `
<Mie.Slider
  onChange={nextValue => setFirst(nextValue)}
  accent="warning"
  value={first}
  max={100}
  min={0}
/>

<Mie.Slider
  onChange={nextValue => setFirst(nextValue)}
  accent="error"
  value={first}
  max={100}
  min={0}
/>

<Mie.Slider
  onChange={nextValue => setFirst(nextValue)}
  accent="success"
  value={first}
  max={100}
  min={0}
/>
`.trim()

const SIZES_TYPESCRIPT = `
<Mie.Slider
  onChange={nextValue => setFirst(nextValue)}
  accent="warning"
  size="small"
  value={first}
  max={100}
  min={0}
/>

<Mie.Slider
  onChange={nextValue => setFirst(nextValue)}
  accent="error"
  value={first}
  max={100}
  min={0}
/>

<Mie.Slider
  onChange={nextValue => setFirst(nextValue)}
  accent="success"
  size="large"
  value={first}
  max={100}
  min={0}
/>
`.trim()

export function SliderPage() {
  const [first, setFirst] = useState(50)
  const [second, setSecond] = useState({
    max: 30,
    min: 60,
  })

  return (
    <div className="page slider">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Slider"
            subtitle="Different slider variants"
            size="large"
            center
          />
        }
      >
        <ComponentGroup
          title="Default"
          code={{
            jsx: DEFAULT_TYPESCRIPT,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Slider
              onChange={nextValue => setFirst(nextValue)}
              value={first}
              max={100}
              min={0}
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Range Slider"
          code={{
            jsx: RANGE_TYPESCRIPT,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.RangeSlider
              onChange={nextValue => setSecond(nextValue)}
              value={second}
              step={1}
              max={100}
              min={0}
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Vertical"
          code={{
            jsx: VERTICAL_TYPESCRIPT,
          }}
        >
          <Mie.View className="sample" justifyContent="center" flex1 flex>
            <Mie.Slider
              onChange={nextValue => setFirst(nextValue)}
              orientation="vertical"
              value={first}
              max={100}
              min={0}
            />
          </Mie.View>
          <Mie.View className="sample" justifyContent="center" flex1 flex>
            <Mie.RangeSlider
              onChange={nextValue => setSecond(nextValue)}
              orientation="vertical"
              value={second}
              step={1}
              max={100}
              min={0}
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
            <Mie.Slider
              onChange={nextValue => setFirst(nextValue)}
              accent="warning"
              value={first}
              max={100}
              min={0}
            />
            <Mie.Slider
              onChange={nextValue => setFirst(nextValue)}
              accent="error"
              value={first}
              max={100}
              min={0}
            />
            <Mie.Slider
              onChange={nextValue => setFirst(nextValue)}
              accent="success"
              value={first}
              max={100}
              min={0}
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
            <Mie.Slider
              onChange={nextValue => setFirst(nextValue)}
              accent="warning"
              size="small"
              value={first}
              max={100}
              min={0}
            />
            <Mie.Slider
              onChange={nextValue => setFirst(nextValue)}
              accent="error"
              value={first}
              max={100}
              min={0}
            />
            <Mie.Slider
              onChange={nextValue => setFirst(nextValue)}
              accent="success"
              size="large"
              value={first}
              max={100}
              min={0}
            />
          </Mie.View>
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}