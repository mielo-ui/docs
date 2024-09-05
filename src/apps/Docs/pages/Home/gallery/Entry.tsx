import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

export function Entry() {
  const [email, setEmail] = useState("sample@gmail.co")
  const [username, setUsername] = useState("")

  const defaultProps = {
    onChange: event => setUsername(event.target.value),
    placeholder: "Enter Username",
    label: "Username",
    value: username,
    type: "text",
  }

  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Entry">
      <Mie.L.Header title="Entry" size="small" mb="small" />

      <Mie.L.View
        className="card"
        gr="big"
        bg="content"
        r="large"
        p="large"
        shadow
        fc
        f
      >
        <Mie.L.View f fc f1 gr="small">
          <Mie.L.Entry
            onChange={event => setUsername(event.target.value)}
            placeholder="Enter username"
            label="Username"
            value={username}
            name="username"
            type="text"
            r="large"
          />

          <Mie.L.Entry
            onChange={event => setEmail(event.target.value)}
            placeholder="Enter email"
            label="Email"
            value={email}
            name="email"
            type="text"
            r="large"
          />

          <Mie.L.Entry
            onChange={event => setEmail(event.target.value)}
            placeholder="Enter password"
            label="Password (Disabled)"
            value="Disaled"
            name="password"
            type="password"
            disabled
            r="large"
          />
        </Mie.L.View>

        <Mie.Divider />

        <Mie.L.View f fc gr="small">
          <Mie.L.Entry {...defaultProps} name="rounded-1" accent r="none" />
          <Mie.L.Entry
            {...defaultProps}
            name="rounded-2"
            accent="warning"
            r="tiny"
          />
          <Mie.L.Entry {...defaultProps} name="rounded-4" accent="error" r />
          <Mie.L.Entry
            {...defaultProps}
            name="rounded-4"
            accent="success"
            r="large"
          />
        </Mie.L.View>
      </Mie.L.View>
    </Mie.L.View>
  )
} 