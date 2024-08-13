import { tsFormatSample } from "../../../../utils"
import { Code } from "../../../../components/Code"

import rawTsCode from "./Confirm.tsx?raw"
import rawPropsCode from "../../../../../node_modules/@mielo-ui/mielo-react/src/containers/Dialog/Confirm/Props.ts?raw"

//@chunk
import { useCallback, useRef, useState } from "react"
import * as Mie from "@mielo-ui/mielo-react"

const sizes = [
  { title: "Small", value: "small" },
  { title: "Medium", value: "medium" },
  { title: "Large", value: "large" },
]

const accents = [
  { title: "Without Accent", value: false },
  { title: "Accent", value: true },
  { title: "Warning", value: "warning" },
  { title: "Error", value: "error" },
  { title: "Success", value: "success" },
]

function Confirm() {
  const confirmRef = useRef<Mie.ConfirmHandles>(null)

  const [lastAction, setLastAction] = useState<any | null>(null)
  const [title, setTitle] = useState("Save Changes?")
  const [subtitle, setSubtitle] = useState(
    "Open document contains unsaved changes",
  )

  const [accent, setAccent] = useState<Mie.OptionValue>(accents[0])
  const [size, setSize] = useState<Mie.OptionValue>(sizes[1])
  const [isDarkTheme, setDarkTheme] = useState(false)

  const onOpenModel = useCallback(async () => {
    if (confirmRef.current) {
      const confirmedAction = await confirmRef.current.confirm()
      setLastAction(confirmedAction)
    }
  }, [])

  return (
    <>
      <Mie.Confirm
        ref={confirmRef}
        accent={accent.value as any}
        size={size.value as any}
        header={{
          subtitle: <Mie.L.Text mt="small">{subtitle}</Mie.L.Text>,
          size: "large",
          center: true,
          title,

          mt: "large",
          mh: "large",
        }}
      />

      <Mie.L.View f f1 fc>
        <Mie.L.Rows r="large" shadow>
          <Mie.L.Rows.Entry
            onChange={event => setTitle(event.target.value)}
            placeholder="Enter Accent"
            label="Accent"
            value={title}
            name="title"
            rt="large"
            rb="none"
          />
          <Mie.L.Rows.Entry
            onChange={event => setSubtitle(event.target.value)}
            placeholder="Enter Subtitle"
            label="Subtitle"
            value={subtitle}
            name="subtitle"
            r="none"
          />
          <Mie.L.Rows.Row
            description="Enable dark theme for modal"
            title="Dark Theme"
            r="none"
            side={
              <Mie.L.Checkbox
                onChange={event => setDarkTheme(event.target.checked)}
                checked={isDarkTheme}
                name="dark-theme"
                accent="success"
                toggle
              />
            }
          />
          <Mie.L.Rows.Select
            onChange={option => setSize(option)}
            options={sizes}
            value={size}
            label="Size"
            name="size"
            r="none"
          />
          <Mie.L.Rows.Select
            onChange={option => setAccent(option)}
            options={accents}
            value={accent}
            label="Accent"
            name="accent"
            rb="large"
            rt="none"
          />
        </Mie.L.Rows>

        {lastAction && (
          <Code
            code={JSON.stringify(lastAction, null, 4)}
            className="mie view f mt-large large r-large"
            lang="json"
          />
        )}

        <Mie.L.View f fjc="center" mt="large">
          <Mie.L.Button
            onClick={onOpenModel}
            label="Open Confirm"
            accent="success"
            size="large"
            ph="massive"
            filled
            pilled
          />
        </Mie.L.View>
      </Mie.L.View>
    </>
  )
}
//@chunk
const rawHtmlCode = `
// Without HTML
// Only React Component
`.trim()

export default Object.assign(Confirm, {
  title: "Confirm",
  code: {
    ts: tsFormatSample(rawTsCode),
    props: rawPropsCode,
    html: rawHtmlCode,
  },
})