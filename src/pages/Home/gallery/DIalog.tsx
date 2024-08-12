import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function Dialog() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Dialog">
      <Mie.L.Header title="Dialog" size="small" mb="small" />

      <Mie.L.View
        className="card"
        bg="panel"
        r="large"
        p="large"
        shadow
        sbv
        fc
        f
      >
        <Mie.Dialog
          actions={[
            <Mie.Dialog.Action label="Cancel" />,
            <Mie.Dialog.Action accent label="Save Changes" />,
            <Mie.Dialog.Action accent="error" label="Discard" />,
          ]}
        >
          <Mie.L.Header
            subtitle="Open document contains unsaved changes."
            title="Save Changes?"
            size="large"
            center
          />

          <Mie.L.List.Item
            icon={
              <Mie.L.Icon
                icon={<Icons.Places.FolderMusic />}
                accent="success"
                size="small"
                r="large"
                p="small"
                bg
              />
            }
            description={
              <Mie.L.Text accent="success" mt="mini" size="tiny">
                /home/my/Audio/Old/tagged/#dnb
              </Mie.L.Text>
            }
            title={
              <Mie.L.Text accent="success" semibold>
                MyProject.daw
              </Mie.L.Text>
            }
            accent="success"
            activatable
            mb="large"
            ph="small"
            pv="tiny"
            r
          />
        </Mie.Dialog>
      </Mie.L.View>
    </Mie.L.View>
  )
} 