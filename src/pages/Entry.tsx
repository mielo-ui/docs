import { useState } from "react"

import { ComponentGroup } from "../components"
import * as Mie from "mielo-react"

const DEFAULT_TYPESCRIPT = `
import * as Mie from "mielo-react"

// ...
const [username, setUsername] = useState("")

<Mie.Entry
  placeholder="Username"
  onChange={(text) => setUsername(text)}
  value={username}
  name="username"
  type="text"
/>
`.trim()

const DEFAULT_HTML = `
<div class="mie entry">
  <input
    class="filled"
    id="entry_username"
    name="username"
    type="text"
    value="Sample text"
  />
  <label for="entry_username">
    Username
  </label>
</div>
`.trim()

const DISABLED_TYPESCRIPT = `
<Mie.Entry
  value="My-Awesome-Nickname"
  placeholder="Username"
  name="username"
  type="text"
  disabled
/>
`.trim()

const DISABLED_HTML = `
<div class="mie entry disabled">
  <input
    value="My-Awesome-Nickname"
    id="entry_username"
    name="username"
    class="filled"
    type="text"
    disabled=""
  />
  <label for="entry_username">
    Username
  </label>
</div>
`.trim()

const ACCENTS_TYPESCRIPT = `
<Mie.Entry
  message="Error message"
  accent="error"
  placeholder="Username"
  value="Sample text"
  name="username-a-1"
  type="text"
/>

<Mie.Entry
  message="Warning message"
  accent="warning"
  placeholder="Username"
  value="Sample text"
  name="username-a-2"
  type="text"
/>

<Mie.Entry
  message="Success message"
  accent="success"
  placeholder="Username"
  value="Sample text"
  name="username-a-3"
  type="text"
/>
`.trim()

const ACCENTS_HTML = `
<div class="mie entry error">
  <input
    class="filled"
    id="entry_username-a-1"
    name="username-a-1"
    type="text"
    value="Sample text"
  />
  
  <label for="entry_username-a-1">Username</label>
  
  <button
    class="mie button icon transparent circular indicator"
    id="entry_username-a-1_tooltip"
  >
    <div class="icon">
      <svg />
    </div>
  </button>
</div>

<div class="mie entry warning">
  <input
    class="filled"
    id="entry_username-a-2"
    name="username-a-2"
    type="text"
    value="Sample text"
  />
  
  <label for="entry_username-a-2">
    Username
  </label>
  
  <button
    class="mie button icon transparent circular indicator"
    id="entry_username-a-2_tooltip"
  >
    <div class="icon">
      <svg />
    </div>
  </button>
</div>

<div class="mie entry success">
  <input
    class="filled"
    id="entry_username-a-3"
    name="username-a-3"
    type="text"
    value="Sample text"
  />
  
  <label for="entry_username-a-3">
    Username
  </label>
  
  <button
    class="mie button icon transparent circular indicator"
    id="entry_username-a-3_tooltip"
  >
    <div class="icon">
      <svg />
    </div>
  </button>
</div>
`.trim()

const SIZES_TYPESCRIPT = `
<Mie.Entry
  placeholder="Field name"
  value="Small entry size"
  name="username-s-1"
  size="small"
  type="text"

  message="Small entry message"
  accent="error"
/>

<Mie.Entry
  placeholder="Field name"
  value="Defailt entry size"
  name="username-s-2"
  type="text"

  message="Default medium entry message"
  accent="warning"
/>

<Mie.Entry
  placeholder="Field name"
  value="Large entry size"
  name="username-s-3"
  size="large"
  type="text"

  message="Large entry message"
  accent="success"
/>
`.trim()

const SIZES_HTML = `
<div class="mie entry error small">
  <input
    class="filled"
    id="entry_username-a-1"
    name="username-a-1"
    type="text"
    value="Small"
  />
  
  <label for="entry_username-a-1">Username</label>
  
  <button
    class="mie button icon transparent circular indicator"
    id="entry_username-a-1_tooltip"
  >
    <div class="icon">
      <svg />
    </div>
  </button>
</div>

<div class="mie entry warning">
  <input
    class="filled"
    id="entry_username-a-2"
    name="username-a-2"
    type="text"
    value="Derfault entry size"
  />
  
  <label for="entry_username-a-2">
    Username
  </label>
  
  <button
    class="mie button icon transparent circular indicator"
    id="entry_username-a-2_tooltip"
  >
    <div class="icon">
      <svg />
    </div>
  </button>
</div>

<div class="mie entry success large">
  <input
    class="filled"
    id="entry_username-a-3"
    name="username-a-3"
    type="text"
    value="Large entry size"
  />
  
  <label for="entry_username-a-3">
    Username
  </label>
  
  <button
    class="mie button icon transparent circular indicator"
    id="entry_username-a-3_tooltip"
  >
    <div class="icon">
      <svg />
    </div>
  </button>
</div>

`.trim()

export function EntryPage() {
  const [first, setFirst] = useState("Sample text")

  return (
    <div className="page entry">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Entry"
            subtitle="Different entry variants"
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
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Entry
              placeholder="Username"
              onChange={t => setFirst(t)}
              value={first}
              name="username"
              type="text"
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          title="Disabled"
          code={{
            jsx: DISABLED_TYPESCRIPT,
            html: DISABLED_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            alignItems="center"
            flex1
            flex
          >
            <Mie.Entry
              value="My-Awesome-Nickname"
              placeholder="Username"
              name="username"
              type="text"
              disabled
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Accents"
          code={{
            jsx: ACCENTS_TYPESCRIPT,
            html: ACCENTS_HTML,
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
            <Mie.Entry
              message="Error message"
              accent="error"
              placeholder="Username"
              value="Sample text"
              name="username-a-1"
              type="text"
            />

            <Mie.Entry
              message="Warning message"
              accent="warning"
              placeholder="Username"
              value="Sample text"
              name="username-a-2"
              type="text"
            />

            <Mie.Entry
              message="Success message"
              accent="success"
              placeholder="Username"
              value="Sample text"
              name="username-a-3"
              type="text"
            />
          </Mie.View>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Sizes"
          code={{
            jsx: SIZES_TYPESCRIPT,
            html: SIZES_HTML,
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
            <Mie.Entry
              placeholder="Field name"
              value="Small entry size"
              name="username-s-1"
              size="small"
              type="text"
              message="Small entry message"
              accent="success"
            />

            <Mie.Entry
              placeholder="Field name"
              value="Small entry size"
              name="username-s-2"
              type="text"
              message="Default medium entry message"
              accent="warning"
            />

            <Mie.Entry
              placeholder="Field name"
              value="Small entry size"
              name="username-s-3"
              size="large"
              type="text"
              message="Large entry message"
              accent="error"
            />
          </Mie.View>
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}