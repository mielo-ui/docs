import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function List() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="List">
      <Mie.L.Header title="List" size="small" mb="small" />

      <Mie.L.View
        className="card"
        sbh="massive"
        bg="panel"
        r="large"
        p="large"
        shadow
        fr
        f
      >
        <Mie.L.View f fc>
          <Mie.L.List>
            <Mie.L.List.Item
              title="First Item"
              activatable
              ph="small"
              pv="tiny"
              r
            />
            <Mie.L.List.Item
              title="Second Item"
              activatable
              ph="small"
              pv="tiny"
              r
            />
            <Mie.L.List.Item
              title="Third Item"
              activatable
              ph="small"
              pv="tiny"
              r
            />
          </Mie.L.List>
        </Mie.L.View>

        <Mie.L.View f fc>
          <Mie.L.List>
            <Mie.L.List.Item
              title="Title"
              description="Item description text"
              activatable
              ph="small"
              pv="tiny"
              r
            />
            <Mie.L.List.Item
              title="Title"
              description="Item description text"
              activatable
              ph="small"
              pv="tiny"
              r
            />
            <Mie.L.List.Item
              title="Title"
              description="Item description text"
              activatable
              ph="small"
              pv="tiny"
              r
            />
          </Mie.L.List>
        </Mie.L.View>

        <Mie.L.View f fc>
          <Mie.L.List sbv="tiny">
            <Mie.L.List.Item
              icon={
                <Mie.Icon icon={<Icons.Places.FolderVideos />} size="small" />
              }
              description="Common video container"
              title="Video"
              activatable
              ph="small"
              pv="tiny"
              r
            />
            <Mie.L.List.Item
              icon={
                <Mie.Icon icon={<Icons.Places.FolderMusic />} size="small" />
              }
              description="Common music container"
              title="Music"
              activatable
              ph="small"
              pv="tiny"
              r
            />
            <Mie.L.List.Item
              icon={
                <Mie.Icon icon={<Icons.Places.FolderDownload />} size="small" />
              }
              description="Network downloads"
              title="Download"
              activatable
              ph="small"
              pv="tiny"
              r
            />
          </Mie.L.List>
        </Mie.L.View>

        <Mie.L.View f fc>
          <Mie.L.List>
            <Mie.L.List.Item
              label={
                <Mie.Label
                  style={{ transform: "translateX(30%)", top: "-0.6rem" }}
                  transparent
                  size="small"
                  bordered
                  floating
                  accent
                >
                  <Mie.L.View f fr>
                    <Mie.L.Icon
                      icon={<Icons.Actions.DocumentSend />}
                      size="small"
                      mr="mini"
                      accent
                    />
                    <Mie.Text accent size="small">
                      4 upload now
                    </Mie.Text>
                  </Mie.L.View>
                </Mie.Label>
              }
              icon={
                <Mie.L.Icon
                  icon={<Icons.Places.FolderDownload />}
                  size="small"
                  r="large"
                  p="small"
                  accent
                  bg
                />
              }
              description="Network downloads"
              title="Download"
              activatable
              ph="small"
              pv="tiny"
              accent
              r
            />

            <Mie.L.List.Item
              label={
                <Mie.Label
                  children="5 fresh video"
                  accent="error"
                  transparent
                  size="small"
                  bordered
                  floating
                />
              }
              icon={
                <Mie.L.Icon
                  icon={<Icons.Places.FolderVideos />}
                  accent="error"
                  size="small"
                  r="large"
                  p="small"
                  bg
                />
              }
              description="Common video container"
              accent="error"
              title="Video"
              activatable
              ph="small"
              pv="tiny"
              r
            />
            <Mie.L.List.Item
              label={
                <Mie.Label
                  children="5 played"
                  accent="success"
                  transparent
                  size="small"
                  bordered
                  floating
                />
              }
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
              description="Common music container"
              accent="success"
              title="Music"
              activatable
              ph="small"
              pv="tiny"
              r
            />

            <Mie.L.List.Item
              label={
                <Mie.Label
                  style={{ transform: "translateX(30%)", top: "-0.6rem" }}
                  accent="warning"
                  transparent
                  size="small"
                  bordered
                  floating
                >
                  <Mie.L.View f fr>
                    <Mie.L.Icon
                      icon={<Icons.Status.DialogError />}
                      accent="warning"
                      size="small"
                      circular
                    />
                  </Mie.L.View>
                </Mie.Label>
              }
              icon={
                <Mie.L.Icon
                  icon={<Icons.Places.FolderRemote />}
                  accent="warning"
                  size="small"
                  r="large"
                  p="small"
                  bg
                />
              }
              description="Network configurations"
              accent="warning"
              title="Remote"
              activatable
              ph="small"
              pv="tiny"
              r
            />
          </Mie.L.List>
        </Mie.L.View>
      </Mie.L.View>
    </Mie.L.View>
  )
} 