import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useMediaQuery } from "usehooks-ts"

export function Dialog() {
  const isMobile = useMediaQuery("(max-width: 768px)")

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
          size={isMobile ? "small" : undefined}
          actions={[
            <Mie.L.Button
              label="Cancel"
              key="cancel"
              transparent
              tertiary
              size={isMobile ? "tiny" : undefined}
              pv="small"
            />,
            <Mie.L.Button
              label="Save Changes"
              transparent
              key="save"
              tertiary
              accent
              size={isMobile ? "tiny" : undefined}
              pv="small"
            />,
            <Mie.L.Button
              label="Discard"
              accent="error"
              key="discard"
              transparent
              tertiary
              size={isMobile ? "tiny" : undefined}
              pv="small"
            />,
          ]}
        >
          <Mie.L.Header
            subtitle="Open document contains unsaved changes."
            title="Save Changes?"
            size={isMobile ? "tiny" : undefined}
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
                size={isMobile ? "tiny" : "small"}
                accent="success"
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
            title={<Mie.L.Text size={isMobile ? "small" : undefined} fsemibold>MyProject.daw</Mie.L.Text>}
          />
        </Mie.Dialog>
      </Mie.L.View>
    </Mie.L.View>
  )
} 