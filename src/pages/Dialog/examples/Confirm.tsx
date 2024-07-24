import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Confirm.tsx?raw"

//@chunk
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { useCallback, useRef, useState } from "react"
import * as Mie from "mielo-react"

const themes = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
]

const sizes = [
  { label: "Small", value: "small" },
  { label: "Medium", value: "medium" },
  { label: "large", value: "large" },
]

const accents = [
  { label: "Without Accent", value: false },
  { label: "Accent", value: true },
  { label: "Warning", value: "warning" },
  { label: "Error", value: "error" },
  { label: "Success", value: "success" },
]

function Confirm() {
  const [lastAction, setLastAction] = useState<any | null>(null)
  const confirmRef = useRef<Mie.ConfirmMethods>(null)

  const [title, setTitle] = useState("Save Changes?")
  const [subtitle, setSubtitle] = useState(
    `
    Open document contains unsaved changes.
    Changes which are not saved will be permanently lost.
  `.trim(),
  )

  const [accent, setAccent] = useState(accents[0])
  const [theme, setTheme] = useState(themes[0])
  const [size, setSize] = useState(sizes[1])

  const onOpenModel = useCallback(async () => {
    if (confirmRef.current) {
      const confirmedAction = await confirmRef.current.confirm()
      setLastAction(confirmedAction)
    }
  }, [])

  const codeTagProps = {
    style: { lineHeight: "inherit", fontSize: "inherit" },
  }

  const customStyles = {
    borderRadius: "0.6rem",
    fontSize: "1.6rem",
    lineHeight: "1",
    padding: "1.6rem 1.2rem",
    width: "100%",
  }

  const highlighterProps = {
    codeTagProps: codeTagProps,
    customStyle: customStyles,
    language: "json",
    style: atomDark,
  }

  return (
    <>
      <Mie.Confirm
        ref={confirmRef}
        accent={accent.value as any}
        theme={theme.value as any}
        size={size.value as any}
        title={title}
        subtitle={subtitle}
      />

      <Mie.L.View flex flex1 column alignItems="center">
        <Mie.L.Rows r="large">
          <Mie.L.Rows.Entry
            onChange={setTitle}
            placeholder="Accent"
            value={title}
            name="title"
            rt="large"
            rb="none"
          />
          <Mie.L.Rows.Entry
            onChange={setSubtitle}
            placeholder="Subtitle"
            value={subtitle}
            name="subtitle"
            r="none"
          />
          <Mie.L.Rows.Select
            onChange={setTheme}
            options={themes}
            value={theme}
            label="Theme"
            name="theme"
            r="none"
          />
          <Mie.L.Rows.Select
            onChange={setSize}
            options={sizes}
            value={size}
            label="Size"
            name="size"
            r="none"
          />
          <Mie.L.Rows.Select
            onChange={setAccent}
            options={accents}
            value={accent}
            label="Accent"
            name="accent"
            rb="large"
            rt="none"
          />
        </Mie.L.Rows>

        {lastAction && (
          <Mie.L.View flex r m>
            <SyntaxHighlighter {...highlighterProps}>
              {JSON.stringify(lastAction, null, 4)}
            </SyntaxHighlighter>
          </Mie.L.View>
        )}

        <Mie.L.Button
          onClick={onOpenModel}
          label="Open Confirm"
          pilled
          filled
          accent
          size="large"
          mt="massive"
          ph="massive"
        />
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
    html: rawHtmlCode,
  },
})