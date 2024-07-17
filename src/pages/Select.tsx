import { useState } from "react"

import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"

const [times, setTimes] = useState({
  label: "Day",
  value: "day",
})

const options = [
  {
    label: "Morning",
    value: "morning",
  },
  {
    label: "Day",
    value: "day",
  },
  {
    label: "Night",
    value: "night",
  },
]

<Mie.Select
  onChange={option => setTimes(option)}
  options={options}
  label="Times"
  value={times}
  name="times"
/>
`.trim()

const ACCENTS_TYPESCRIPT = `
<Mie.Select
  onChange={option => setSecond(option)}
  label="Select..."
  options={options}
  value={second}
  name="a-1"

  message="Some warning status"
  accent="warning"
/>

<Mie.Select
  onChange={option => setSecond(option)}
  label="Select..."
  options={options}
  value={second}
  name="a-2"

  message="Some error status"
  accent="error"
/>

<Mie.Select
  onChange={option => setSecond(option)}
  label="Select..."
  options={options}
  value={second}
  name="a-3"

  message="Some success status"
  accent="success"
/>
`.trim()

const SIZES_TYPESCRIPT = `
<Mie.Select
  onChange={option => setSecond(option)}
  label="Select..."
  options={options}
  value={second}
  name="c-1"
  message="Some warning status"
  accent="warning"
  size="small"
/>

<Mie.Select
  onChange={option => setSecond(option)}
  label="Select..."
  options={options}
  value={second}
  name="c-2"
  message="Some error status"
  accent="error"
/>

<Mie.Select
  onChange={option => setSecond(option)}
  label="Select..."
  options={options}
  value={second}
  name="c-3"
  message="Some success status"
  accent="success"
  size="large"
/>
`.trim()

export function SelectPage() {
  const [times, setTimes] = useState({
    label: "Day",
    value: "day",
  })

  const optionsTimes = [
    {
      label: "Morning",
      value: "morning",
    },
    {
      label: "Day",
      value: "day",
    },
    {
      label: "Night",
      value: "night",
    },
  ]

  const [second, setSecond] = useState<any>({
    label: "Option First Label",
    value: "option-1",
  })

  const options = [
    {
      label: "Option First Label",
      value: "option-1",
    },
    {
      label: "Option Second Label",
      value: "option-2",
    },
    {
      label: "Option Third Label",
      value: "option-3",
    },
  ]

  return (
    <div className="page checkbox">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Select"
            subtitle="Different select variants"
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
            column
            flex1
            flex
          >
            <Mie.Select
              onChange={option => setTimes(option)}
              options={optionsTimes}
              label="Times"
              value={times}
              name="times"
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
            alignItems="center"
            column
            flex1
            flex
          >
            <Mie.Select
              onChange={option => setSecond(option)}
              label="Select..."
              options={options}
              value={second}
              name="a-1"
              message="Some warning status"
              accent="warning"
            />

            <Mie.Select
              onChange={option => setSecond(option)}
              label="Select..."
              options={options}
              value={second}
              name="a-2"
              message="Some error status"
              accent="error"
            />

            <Mie.Select
              onChange={option => setSecond(option)}
              label="Select..."
              options={options}
              value={second}
              name="a-3"
              message="Some success status"
              accent="success"
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
            alignItems="center"
            column
            flex1
            flex
          >
            <Mie.Select
              onChange={option => setSecond(option)}
              label="Select..."
              options={options}
              value={second}
              name="c-1"
              message="Some warning status"
              accent="warning"
              size="small"
            />

            <Mie.Select
              onChange={option => setSecond(option)}
              label="Select..."
              options={options}
              value={second}
              name="c-2"
              message="Some error status"
              accent="error"
            />

            <Mie.Select
              onChange={option => setSecond(option)}
              label="Select..."
              options={options}
              value={second}
              name="c-3"
              message="Some success status"
              accent="success"
              size="large"
            />
          </Mie.View>
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}