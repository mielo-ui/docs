import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function View() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="View">
      <Mie.L.Header title="View" size="small" mb="small" />

      <Mie.L.View className="card" bg="content" r="large" shadow fc f>
        <Mie.L.View bg="content" f1 f p="large" rt="large">
          <Mie.Header title={<Mie.Text fsemibold>Content</Mie.Text>} inverted />
        </Mie.L.View>
        <Mie.L.View bg="content" f1 f p="large">
          <Mie.Header title={<Mie.Text fsemibold>Panel</Mie.Text>} inverted />
        </Mie.L.View>
        <Mie.L.View bg="windows" f1 f p="large">
          <Mie.Header title={<Mie.Text fsemibold>Window</Mie.Text>} inverted />
        </Mie.L.View>
        <Mie.L.View bg="osd" f1 f p="large" rb="large">
          <Mie.Header
            title={
              <Mie.Text color="light" fsemibold>
                OSD
              </Mie.Text>
            }
            inverted
          />
        </Mie.L.View>
      </Mie.L.View>

      <Mie.L.View className="card" bg="content" r="large" mt="large" shadow fc f>
        <Mie.L.View accent f1 f p="large" rt="large">
          <Mie.Header
            title={<Mie.Text fsemibold>Accent</Mie.Text>}
            subtitle={<Mie.Text>Main accent color</Mie.Text>}
            inverted
          />
        </Mie.L.View>
        <Mie.L.View accent="warning" f1 f p="large">
          <Mie.Header
            title={<Mie.Text fsemibold>Accent</Mie.Text>}
            subtitle={<Mie.Text>Warning</Mie.Text>}
            inverted
          />
        </Mie.L.View>
        <Mie.L.View accent="error" f1 f p="large">
          <Mie.Header
            title={<Mie.Text fsemibold>Accent</Mie.Text>}
            subtitle={<Mie.Text>Error</Mie.Text>}
            inverted
          />
        </Mie.L.View>
        <Mie.L.View accent="success" f1 f p="large" rb="large">
          <Mie.Header
            title={<Mie.Text fsemibold>Accent</Mie.Text>}
            subtitle={<Mie.Text>Success</Mie.Text>}
            inverted
          />
        </Mie.L.View>
      </Mie.L.View>
    </Mie.L.View>
  )
} 