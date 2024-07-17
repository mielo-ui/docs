import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

import { useState } from "react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"

<Mie.Rows>
  <Mie.Rows.Row />
  <Mie.Rows.Row />
  <Mie.Rows.Row />
</Mie.Rows>
`.trim()

const DEFAULT_HTML = `
<div class="mie rows">
  <div class="mie item row property">
    <div class="content"></div>
  </div>

  <div class="mie item row property">
    <div class="content"></div>
  </div>

  <div class="mie item row property">
    <div class="content"></div>
  </div>
</div>
`.trim()

const ACCENTS_TYPESCRIPT = `
<Mie.Rows>
  <Mie.Rows.Row accent="warning" />
  <Mie.Rows.Row accent="error" />
  <Mie.Rows.Row accent="success" />
</Mie.Rows>
`.trim()

const ACCENTS_HTML = `
<div class="mie rows">
  <div class="mie item row property warning">
    <div class="content"></div>
  </div>

  <div class="mie item row property error">
    <div class="content"></div>
  </div>

  <div class="mie item row property success">
    <div class="content"></div>
  </div>
</div>
`.trim()

const ENTRY_TYPESCRIPT = `
const [username, setUsername] = useState("")

<Mie.Rows>
  <Mie.Rows.Entry
    placeholder="Username"
    onChange={nextValue => setUsername(nextValue)}
    value={username}
    name="username"
    type="text"
  />
</Mie.Rows>
`.trim()

const SELECT_TYPESCRIPT = `
<Mie.Rows>
  <Mie.Rows.Select
    onChange={option => setTime(option)}
    label="Select Time"
    options={options}
    value={time}
    name="time"
  />
</Mie.Rows>
`.trim()

const ITEM_TYPESCRIPT = `
<Mie.Rows>
  <Mie.Rows.Row title="Title" activatable />
  
  <Mie.Rows.Row
    icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
    title="Title"
    activatable
  />

  <Mie.Rows.Row
    description="Lorem ipsum description"
    title="Title"
    activatable
  />

  <Mie.Rows.Row
    icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
    description="Lorem ipsum description"
    title="Title"
    activatable
  />

  <Mie.Rows.Row
    description="Lorem ipsum description"
    title="Title"
    activatable
    side={
      <>
        <Mie.Button
          icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
          label="Label"
          size="small"
          accent
        />
      </>
    }
  />

  <Mie.Rows.Row
    icon={<Mie.Icon circular filled icon={<Mie.Icons.FolderNew />} />}
    description="Lorem ipsum description"
    title="Title"
    activatable
    side={
      <>
        <Mie.Button
          icon={<Mie.Icon icon={<Mie.Icons.UserTrash />} />}
          accent="error"
          size="small"
          filled
        />
      </>
    }
  />
</Mie.Rows>
`.trim()

const ITEM_HTML = `
<div class="mie rows">
  <div class="mie item row property">
    <div class="content">
      <div class="title">Title</div>
    </div>
  </div>

  <div class="mie item row property">
    <div class="indicator">
      <div class="mie icon">
        <svg />
      </div>
    </div>

    <div class="content">
      <div class="title">Title</div>
    </div>
  </div>

  <div class="mie item row property">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>

  <div class="mie item row property">
    <div class="indicator">
      <div class="mie icon">
        <svg />
      </div>
    </div>
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>

  <div class="mie item row property">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>

    <div class="side">
      <button class="mie button content icon accent small">
        <div class="icon">
          <div class="mie icon">
            <svg />
          </div>
        </div>

        Label
      </button>
    </div>
  </div>

  <div class="mie item row property">
    <div class="indicator">
      <div class="mie icon circular filled">
        <svg />
      </div>
    </div>

    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
    
    <div class="side">
      <button class="mie button icon filled error small">
        <div class="icon">
          <div class="mie icon">
            <svg />
          </div>
        </div>
      </button>
    </div>
  </div>
</div>
`.trim()

export function RowPage() {
  const [username, setUsername] = useState("my_username")

  const [time, setTime] = useState<any>({
    label: "Night",
    value: "night",
  })

  const options = [
    {
      label: "Night",
      value: "night",
    },
    {
      label: "Day",
      value: "day",
    }
  ]

  return (
    <div className="page rows">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Rows"
            subtitle="Different row variants"
            size="large"
            center
          />
        }
      >
        <ComponentGroup
          title="Default"
          code={{
            jsx: DEFAULT_TYPESCRIPT,
            html: DEFAULT_HTML,
          }}
        >
          <Mie.Rows>
            <Mie.Rows.Row />
            <Mie.Rows.Row />
            <Mie.Rows.Row />
          </Mie.Rows>
        </ComponentGroup>

        <ComponentGroup
          title="Accents"
          code={{
            jsx: ACCENTS_TYPESCRIPT,
            html: ACCENTS_HTML,
          }}
        >
          <Mie.Rows>
            <Mie.Rows.Row accent="warning" />
            <Mie.Rows.Row accent="error" />
            <Mie.Rows.Row accent="success" />
          </Mie.Rows>
        </ComponentGroup>

        <ComponentGroup
          title="Row Item"
          code={{
            jsx: ITEM_TYPESCRIPT,
            html: ITEM_HTML,
          }}
        >
          <Mie.Rows>
            <Mie.Rows.Row title="Title" activatable />
            <Mie.Rows.Row
              icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
              title="Title"
              activatable
            />
            <Mie.Rows.Row
              description="Lorem ipsum description"
              title="Title"
              activatable
            />
            <Mie.Rows.Row
              icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
              description="Lorem ipsum description"
              title="Title"
              activatable
            />
            <Mie.Rows.Row
              description="Lorem ipsum description"
              title="Title"
              activatable
              side={
                <>
                  <Mie.Button
                    icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
                    label="Label"
                    size="small"
                    accent
                  />
                </>
              }
            />
            <Mie.Rows.Row
              icon={<Mie.Icon circular filled icon={<Mie.Icons.FolderNew />} />}
              description="Lorem ipsum description"
              title="Title"
              activatable
              side={
                <>
                  <Mie.Button
                    icon={<Mie.Icon icon={<Mie.Icons.UserTrash />} />}
                    accent="error"
                    size="small"
                    filled
                  />
                </>
              }
            />
          </Mie.Rows>
        </ComponentGroup>

        <ComponentGroup
          title="Entry Row"
          code={{
            jsx: ENTRY_TYPESCRIPT,
          }}
        >
          <Mie.Rows>
            <Mie.Rows.Entry
              placeholder="Username"
              onChange={nextValue => setUsername(nextValue)}
              value={username}
              name="username"
              type="text"
            />
          </Mie.Rows>
        </ComponentGroup>

        <ComponentGroup
          title="Select Row"
          code={{
            jsx: SELECT_TYPESCRIPT,
          }}
        >
          <Mie.Rows>
            <Mie.Rows.Select
              onChange={option => setTime(option)}
              label="Select Time"
              options={options}
              value={time}
              name="time"
            />
          </Mie.Rows>
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}