import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { Code } from "./components/Code"

const INSTALL = `
yarn add @mielo-ui/mielo @mielo-ui/mielo-react
# OR
npm install @mielo-ui/mielo @mielo-ui/mielo-react --save-dev
`.trim()

export function DocsPage() {
  return (
    <div className="page home">
      <Mie.L.View
        className="page-heading"
        shadow="outer"
        fjc="center"
        fai="center"
        bg="panel"
        fc
        rt
        f
      >
        <Mie.Header
          subtitle="Frameword inspired by LibAdwaita"
          title="Mielo UI"
          size="massive"
          center
        />

        <Code lang="bash" code={INSTALL} />
      </Mie.L.View>
      <Mie.L.View className="motivation" p bg="content" r="large">
        <Mie.L.Text size="large">
          The project is inspired by the solution in the design of desktop
          applications on LibAdwaita interface library, and is a set of
          components and containers for quickly creating interfaces in web,
          similar to those found in the native desktop.
        </Mie.L.Text>
      </Mie.L.View>

      <Mie.L.Window
        mt="massive"
        r="large"
        shadow
        style={{
          minWidth: "40rem",
          maxWidth: "50rem",
        }}
        headerbar={{
          header: {
            title: "Default Title",
          },
          controls: <Mie.Window.Controls controls={["minimize", "close"]} />,
        }}
      >
        <Mie.L.View f fc fai="center" fjc="center" p="massive">
          <Mie.Header
            center
            size="massive"
            title="Welcome"
            subtitle="Starter text"
          />

          <Mie.L.Button
            icon={<Mie.Icon icon={<Icons.Devices.AuthFace />} size="large" />}
            label="Scan"
            size="large"
            ph="massive"
            mt="large"
            pilled
          />
        </Mie.L.View>
      </Mie.L.Window>
    </div>
  )
}