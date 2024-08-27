import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { useSelector } from "react-redux"
import clsx from "clsx"

import {
  atomDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism"

import * as selectors from "../../selectors"

export interface CodeProps {
  className?: string
  code: string
  lang: string
}

export function Code({ className, code, lang }: CodeProps) {
  const darkThemeEnable = useSelector(selectors.darkThemeEnable)

  const codeTagProps = {
    style: { lineHeight: "inherit", fontSize: "inherit" },
  }

  const customStyles = {
    padding: "1.6rem 1.2rem",
    borderRadius: null,
    fontSize: "1.6rem",
    lineHeight: "1",
  }

  const highlighterProps = {
    style: darkThemeEnable ? atomDark : oneLight,
    className: clsx("docs-code", className),
    codeTagProps: codeTagProps,
    customStyle: customStyles,
    language: lang,
  }

  return <SyntaxHighlighter {...highlighterProps}>{code}</SyntaxHighlighter>
}