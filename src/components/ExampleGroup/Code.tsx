import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { useSelector } from "react-redux"
import * as Mie from "mielo-react"
import { useState } from "react"

import {
  atomDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism"

import * as selectors from "../../selectors"

export interface ExampleCodeOptions {
  html?: string
  ts?: string
}

export interface ExampleGroupCodeProps {
  code?: ExampleCodeOptions
}

export function ExampleGroupCode({ code }: ExampleGroupCodeProps) {
  const darkThemeEnable = useSelector(selectors.darkThemeEnable)
  const defaultCodeKey = Object.keys(code)[0] || "ts"
  const [tab, setTab] = useState(defaultCodeKey)

  let codeContainer
  if (code && Object.keys(code).length > 0) {
    const language = tab === "ts" ? "tsx" : tab

    const codeTagProps = {
      style: { lineHeight: "inherit", fontSize: "inherit" },
    }

    const customStyles = {
      borderRadius: "0.6rem",
      fontSize: "1.6rem",
      lineHeight: "1",
      padding: "1.6rem 1.2rem",
    }

    const highlighterProps = {
      style: darkThemeEnable ? atomDark : oneLight,
      codeTagProps: codeTagProps,
      customStyle: customStyles,
      language,
    }

    codeContainer = tab && code && (
      <SyntaxHighlighter {...highlighterProps}>{code?.[tab]}</SyntaxHighlighter>
    )
  }

  return (
    <>
      <Mie.Tabs
        onChange={setTab}
        animated={true}
        selected={tab}
        transparent
        mv="large"
        mh="large"
        tabs={{
          ts: {
            title: "React",
            name: "ts",
          },
          html: {
            title: "HTML",
            name: "html",
          },
        }}
      />

      <Mie.View className="code" r="large" f fc>
        {codeContainer}
      </Mie.View>
    </>
  )
}