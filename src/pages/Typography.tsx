import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const HEADER_TYPESCRIPT = `
import * as Mie from "mielo-react"

<Mie.Header
  title="Union Header"
  subtitle="Example of big header"
  center
/>
`.trim()

const HEADER_HTML = `
<div class="mie header center">
  <div class="heading">
    <div class="title">Union Header</div>
    <div class="subtitle">Example of big header</div>
  </div>
</div>
`.trim()

const TITLES_HTML = `
<h1 className="mie text title">Title 1</h1>
<h2 className="mie text title">Title 2</h2>
<h3 className="mie text title">Title 3</h3>
<h4 className="mie text title">Title 4</h4>
`.trim()

const TEXT_TYPESCRIPT = `
<Mie.Text accent>Accent</Mie.Text>
<Mie.Text accent="success">Success</Mie.Text>
<Mie.Text accent="warning">Warning</Mie.Text>
<Mie.Text accent="error">Error</Mie.Text>
`.trim()

const TEXT_HTML = `
<div className="mie text accent">Accent</div>
<div className="mie text success">Success</div>
<div className="mie text warning">Warning</div>
<div className="mie text error">Error</div>
`.trim()

export function TypographyPage() {
  return (
    <div className="page typography">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Typography"
            subtitle="Example of different checkbox & radio variants"
            size="large"
            center
          />
        }
      >
        <ComponentGroup
          description="For full description open Header component docs"
          title="Stack Header"
          code={{
            jsx: HEADER_TYPESCRIPT,
            html: HEADER_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Header
              title="Union Header"
              subtitle="Example of big header"
              center
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Titles"
          code={{
            html: TITLES_HTML,
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
            <h1 className="mie text title">Title 1</h1>
            <h2 className="mie text title">Title 2</h2>
            <h3 className="mie text title">Title 3</h3>
            <h4 className="mie text title">Title 4</h4>
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Text (with accents)"
          code={{
            jsx: TEXT_TYPESCRIPT,
            html: TEXT_HTML,
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
            <Mie.Text accent>Accent</Mie.Text>
            <Mie.Text accent="success">Success</Mie.Text>
            <Mie.Text accent="warning">Warning</Mie.Text>
            <Mie.Text accent="error">Error</Mie.Text>
          </Mie.View>
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}