import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function Dialog() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Dialog">
      <Mie.L.Header title="Dialog" size="small" mb="small" />

      <Mie.L.View
        className="card"
        fai="center"
        fjc="center"
        bg="panel"
        r="large"
        shadow
        fc
        f
        p
      >
        <Mie.Dialog
          actions={[
            <Mie.L.Button
              label="Cancel"
              key="cancel"
              transparent
              tertiary
              pv="small"
            />,
            <Mie.L.Button
              label="Save Changes"
              transparent
              key="save"
              tertiary
              accent
              pv="small"
            />,
            <Mie.L.Button
              label="Discard"
              accent="error"
              key="discard"
              transparent
              tertiary
              pv="small"
            />,
          ]}
        >
          <Mie.L.Header
            subtitle="Open document contains unsaved changes."
            title="Save Changes?"
            mt="large"
            center
          />

          <Mie.L.List.Item
            accent="success"
            activatable
            active
            ph="small"
            mv="large"
            pv="tiny"
            mh="big"
            r="large"
            icon={
              <Mie.L.Icon
                icon={<Icons.Places.FolderMusic />}
                accent="success"
                size="small"
                r="large"
                mr="small"
                p="small"
                bg
              />
            }
            description={
              <Mie.L.Text mt="mini" size="tiny">
                /home/my/Audio/Old/tagged/#dnb
              </Mie.L.Text>
            }
            title={<Mie.L.Text semibold>MyProject.daw</Mie.L.Text>}
          />
        </Mie.Dialog>
      </Mie.L.View>
    </Mie.L.View>
  )
} 