import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function Activatable() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Activatable">
      <Mie.L.Header title="Activatable" size="small" mb="small" />

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
        <Mie.L.View fc f sbv>
          <Mie.L.Activatable
            shadow="inner"
            accent
            ph="large"
            pv="small"
            r
            active
          >
            <Mie.L.Item
              icon={
                <Mie.L.Icon icon={<Icons.Places.FolderDocuments />} accent />
              }
              description="Welcome text"
              title="Documents Button"
              accent
            />
          </Mie.L.Activatable>
          <Mie.L.Activatable
            shadow="inner"
            accent="warning"
            ph="large"
            pv="small"
            r
            active
          >
            <Mie.L.Item
              icon={
                <Mie.L.Icon
                  icon={<Icons.Places.FolderPictures />}
                  accent="warning"
                  size="small"
                  p="small"
                  bg
                  r
                />
              }
              description="Welcome text"
              title="Pictures Button"
              accent="warning"
              center
            />
          </Mie.L.Activatable>
          <Mie.L.Activatable
            shadow="inner"
            accent="error"
            ph="large"
            pv="small"
            r="large"
            active
          >
            <Mie.L.Item
              icon={
                <Mie.L.Icon
                  icon={<Icons.Places.FolderVideos />}
                  accent="error"
                  size="small"
                  p="small"
                  circular
                  bg
                />
              }
              description="Welcome text"
              title={
                <Mie.L.Text mb="mini" accent="error" size="large" semibold>
                  Video Button
                </Mie.L.Text>
              }
              accent="error"
              center
            />
          </Mie.L.Activatable>
          <Mie.L.Activatable
            shadow="inner"
            accent="success"
            ph="large"
            pv="small"
            r="large"
            active
          >
            <Mie.L.Item
              icon={
                <Mie.L.Icon
                  bg
                  size="small"
                  p="small"
                  r
                  icon={<Icons.Places.FolderMusic />}
                  accent="success"
                />
              }
              description="Welcome text"
              title="Music Button"
              accent="success"
              center
            />
          </Mie.L.Activatable>
        </Mie.L.View>
      </Mie.L.View>
    </Mie.L.View>
  )
} 