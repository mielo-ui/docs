import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function Activatable() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Activatable">
      <Mie.L.Header title="Activatable" size="small" mb="small" />

      <Mie.L.View
        className="card"
        fjc="center"
        bg="panel"
        r="large"
        p="large"
        shadow
        sbh
        fr
        f
      >
        <Mie.L.View fc f sbv>
          <Mie.L.Activatable
            shadow="inner"
            ph="large"
            pv="small"
            active
            accent
            r
          >
            <Mie.L.Item
              description="Welcome text"
              title="Documents Button"
              accent
              icon={
                <Mie.L.Icon
                  icon={<Icons.Places.FolderDocuments />}
                  size="large"
                  mr="small"
                  accent
                />
              }
            />
          </Mie.L.Activatable>
          <Mie.L.Activatable
            accent="warning"
            shadow="inner"
            ph="large"
            pv="small"
            active
            r
          >
            <Mie.L.Item
              description="Welcome text"
              title="Pictures Button"
              accent="warning"
              icon={
                <Mie.L.Icon
                  icon={<Icons.Places.FolderPictures />}
                  accent="warning"
                  size="small"
                  mr="small"
                  p="small"
                  bg
                  r
                />
              }
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
              description="Welcome text"
              accent="error"
              title={
                <Mie.L.Text accent="error" fsemibold>
                  Video Button
                </Mie.L.Text>
              }
              icon={
                <Mie.L.Icon
                  icon={<Icons.Places.FolderVideos />}
                  accent="error"
                  size="small"
                  mr="small"
                  p="small"
                  circular
                  bg
                />
              }
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
                  icon={<Icons.Places.FolderMusic />}
                  accent="success"
                  size="small"
                  mr="small"
                  p="small"
                  bg
                  r
                />
              }
              description="Welcome text"
              title="Music Button"
              accent="success"
            />
          </Mie.L.Activatable>
        </Mie.L.View>

        <Mie.L.View fc f sbv>
          <Mie.L.Activatable
            shadow="inner"
            ph="large"
            pv="large"
            active
            accent
            r
          >
            <Mie.L.Icon icon={<Icons.Places.FolderDocuments />} accent />
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
              accent="warning"
              center
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
              accent="error"
              center
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
            />
          </Mie.L.Activatable>
          <Mie.L.Activatable
            accent="success"
            shadow="inner"
            ph="large"
            pv="small"
            r="large"
            active
          >
            <Mie.L.Item
              accent="success"
              center
              icon={
                <Mie.L.Icon
                  icon={<Icons.Places.FolderMusic />}
                  accent="success"
                  size="small"
                  p="small"
                  bg
                  r
                />
              }
            />
          </Mie.L.Activatable>
        </Mie.L.View>
      </Mie.L.View>
    </Mie.L.View>
  )
} 