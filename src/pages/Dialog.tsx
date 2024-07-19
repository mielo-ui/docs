import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { useCallback, useRef, useState } from "react"
import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"

const [modalOpened, setModalOpened] = useState(false)

<Mie.Dialog
  onRequestClose={() => setModalOpened(false)}
  isOpen={modalOpened}
  attached="modal"
  theme="dark"
  actions={
    <>
      <Mie.Dialog.Action
        onClick={() => setModalOpened(false)}
        label="Cancel"
      />
      <Mie.Dialog.Action
        onClick={() => setModalOpened(false)}
        label="Discard"
        accent="error"
      />
      <Mie.Dialog.Action
        onClick={() => setModalOpened(false)}
        label="Save"
        accent
      />
    </>
  }
>
  <Mie.Header
    title="Save Changes?"
    subtitle="Open document contains unsaved changes. Changes which are not saved will be permanently lost."
    attached="dialog"
    center
  />
</Mie.Dialog>

<Mie.Button
  onClick={() => {
    setModalOpened(true)
  }}

  label="Open Dialog"
  size="large"
  pilled
  accent
/>
`.trim()

const CONFIRM_TYPESCRIPT = `
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

function ConfirmExample() {
  const [lastAction, setLastAction] = useState<any | null>(null)
  const confirmRef = useRef<Mie.ConfirmMethods>(null)

  const [title, setTitle] = useState("Save Changes?")
  const [subtitle, setSubtitle] = useState(
    \`
    Open document contains unsaved changes.
    Changes which are not saved will be permanently lost.
  \`.trim(),
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
    width: "100%"
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

      <Mie.View className="sample" justifyContent="center" column flex1 flex>
        <Mie.Rows>
          <Mie.Rows.Entry
            onChange={setTitle}
            placeholder="Accent"
            value={title}
            name="title"
          />
          <Mie.Rows.Entry
            onChange={setSubtitle}
            placeholder="Subtitle"
            value={subtitle}
            name="subtitle"
          />
          <Mie.Rows.Select
            onChange={setTheme}
            options={themes}
            value={theme}
            label="Theme"
            name="theme"
          />
          <Mie.Rows.Select
            onChange={setSize}
            options={sizes}
            value={size}
            label="Size"
            name="size"
          />
          <Mie.Rows.Select
            onChange={setAccent}
            options={accents}
            value={accent}
            label="Accent"
            name="accent"
          />
        </Mie.Rows>

        {lastAction && (
          <Mie.View flex padding>
            <SyntaxHighlighter {...highlighterProps}>
              {JSON.stringify(lastAction, null, 4)}
            </SyntaxHighlighter>
          </Mie.View>
        )}

        <Mie.Button
          onClick={onOpenModel}
          label="Open Confirm"
          pilled
          filled
          accent
        />
      </Mie.View>
    </>
  )
}
`.trim()

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

function ConfirmExample() {
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

      <Mie.View className="sample" justifyContent="center" column flex1 flex>
        <Mie.Rows>
          <Mie.Rows.Entry
            onChange={setTitle}
            placeholder="Accent"
            value={title}
            name="title"
          />
          <Mie.Rows.Entry
            onChange={setSubtitle}
            placeholder="Subtitle"
            value={subtitle}
            name="subtitle"
          />
          <Mie.Rows.Select
            onChange={setTheme}
            options={themes}
            value={theme}
            label="Theme"
            name="theme"
          />
          <Mie.Rows.Select
            onChange={setSize}
            options={sizes}
            value={size}
            label="Size"
            name="size"
          />
          <Mie.Rows.Select
            onChange={setAccent}
            options={accents}
            value={accent}
            label="Accent"
            name="accent"
          />
        </Mie.Rows>

        {lastAction && (
          <Mie.View flex p>
            <SyntaxHighlighter {...highlighterProps}>
              {JSON.stringify(lastAction, null, 4)}
            </SyntaxHighlighter>
          </Mie.View>
        )}

        <Mie.Button
          onClick={onOpenModel}
          label="Open Confirm"
          pilled
          filled
          accent
        />
      </Mie.View>
    </>
  )
}

export function DialogPage() {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="page checkbox">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Dialog"
            subtitle="Different dialog modal variants"
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
          <Mie.Dialog
            onRequestClose={() => setModalOpened(false)}
            isOpen={modalOpened}
            attached="modal"
            theme="dark"
            actions={
              <>
                <Mie.Dialog.Action
                  onClick={() => setModalOpened(false)}
                  label="Cancel"
                />
                <Mie.Dialog.Action
                  onClick={() => setModalOpened(false)}
                  label="Discard"
                  accent="error"
                />
                <Mie.Dialog.Action
                  onClick={() => setModalOpened(false)}
                  label="Save"
                  accent
                />
              </>
            }
          >
            <Mie.Header
              title="Save Changes?"
              subtitle="Open document contains unsaved changes. Changes which are not saved will be permanently lost."
              attached="dialog"
              center
            />
          </Mie.Dialog>

          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Button
              onClick={() => {
                setModalOpened(true)
              }}
              label="Open Dialog"
              size="large"
              filled
              pilled
              accent
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Confirm"
          code={{
            jsx: CONFIRM_TYPESCRIPT,
          }}
        >
          <ConfirmExample />
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}