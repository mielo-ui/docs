import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

export function Collapsible() {
  const [opened, setOpened] = useState(true)

  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Collapsible">
      <Mie.L.Header title="Collapsible" size="small" mb="small" />

      <Mie.L.View
        className="card"
        bg="content"
        r="large"
        p="large"
        shadow
        sbv
        fc
        f
      >
        <Mie.L.Item
          onClick={() => setOpened(prev => !prev)}
          accent="success"
          activatable
          pv="small"
          active
          center
          ph
          r
          title={
            <Mie.Text accent="success" fsemibold>
              Toggle Content
            </Mie.Text>
          }
        />
        <Mie.L.Collapsible mt open={opened}>
          <Mie.L.View bg="content" ph="small" pv="small" r>
            <Mie.L.Header
              icon={
                <Mie.L.Icon
                  icon={<Icons.Places.FolderMusic />}
                  p="tiny"
                  accent
                  mr
                  bg
                  r
                />
              }
              subtitle="Hidden Text"
              title="Content"
              size="small"
              iconSided
              inverted
              pr="small"
              m="none"
            />
          </Mie.L.View>
        </Mie.L.Collapsible>
      </Mie.L.View>
    </Mie.L.View>
  )
} 