import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { ReactNode, useState } from "react"
import clsx from "clsx"

import * as Mie from "mielo-react"

export interface ComponentGroupProps {
  description?: ReactNode
  title: string

  containerColumn?: boolean
  children?: ReactNode

  code?: {
    jsx?: string
    html?: string
    css?: string
  }
}

export function ComponentGroup({
  description,
  children,
  title,
  code,
  containerColumn,
}: ComponentGroupProps) {
  const hasCodeSample = (code && code?.jsx) || code?.html || code?.css

  const [codeTab, setCodeTab] = useState(
    hasCodeSample ? Object.keys(code)[0] : undefined,
  )

  let codeContainer
  if (hasCodeSample) {
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
      codeTagProps: codeTagProps,
      customStyle: customStyles,
      language: codeTab,
      style: atomDark,
    }

    codeContainer = codeTab && code && (
      <SyntaxHighlighter {...highlighterProps}>
        {(code as any)?.[codeTab]}
      </SyntaxHighlighter>
    )
  }

  return (
    <>
      <Mie.Header size="large" title={title} subtitle={description as any} />

      <Mie.L.View
        className="component-variant-group"
        shadow="outer"
        r="large"
        content
        column
        flex
      >
        {code && (
          <>
            <Mie.L.View
              className={clsx("preview", { column: containerColumn })}
              flex
            >
              {children}
            </Mie.L.View>

            <Mie.L.View
              className="lang-switch"
              justifyContent="center"
              alignItems="center"
              flex
            >
              {["jsx", "html", "css"].map(
                tab =>
                  code &&
                  (code as any)[tab] && (
                    <Mie.Button
                      onClick={() => setCodeTab(tab)}
                      active={codeTab === tab}
                      transparent
                      label={tab}
                      key={`tab-${tab}`}
                    />
                  ),
              )}
            </Mie.L.View>

            <Mie.L.View className="code" r="large" flex column>
              {codeContainer}
            </Mie.L.View>
          </>
        )}
      </Mie.L.View>
    </>
  )
}