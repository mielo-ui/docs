import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useMediaQuery } from "usehooks-ts"

export function List() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <Mie.L.View f fc className="gallery-sample" data-title="List">
      <Mie.L.Header title="List" size="small" mb="small" />

      <Mie.L.View
        p="massive"
        className="card"
        g="massive"
        bg="content"
        r="large"
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
          <Mie.L.List gr="tiny">
            <Mie.L.List.Item
              icon={
                <Mie.L.Icon
                  icon={<Icons.Places.FolderVideos />}
                  size="small"
                  mr="small"
                />
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
                <Mie.L.Icon
                  icon={<Icons.Places.FolderMusic />}
                  size="small"
                  mr="small"
                />
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
                <Mie.L.Icon
                  icon={<Icons.Places.FolderDownload />}
                  size="small"
                  mr="small"
                />
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
          <Mie.L.List gr="tiny">
            <Mie.L.List.Item
              description="Network downloads"
              title="Download"
              activatable
              ph="small"
              pv="tiny"
              accent
              r
              label={
                <Mie.Label
                  style={{ transform: "translateX(30%)", top: "-0.6rem" }}
                  transparent
                  size="tiny"
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
                    <Mie.Text accent size="tiny">
                      4 loaded
                    </Mie.Text>
                  </Mie.L.View>
                </Mie.Label>
              }
              icon={
                <Mie.L.Icon
                  icon={<Icons.Places.FolderDownload />}
                  size="small"
                  r="large"
                  mr="tiny"
                  p="small"
                  accent
                  bg
                />
              }
            />

            <Mie.L.List.Item
              description="Common video container"
              accent="error"
              title="Video"
              activatable
              ph="small"
              pv="tiny"
              r
              label={
                <Mie.Label
                  children="5 video"
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
                  mr="tiny"
                  r="large"
                  p="small"
                  bg
                />
              }
            />
            <Mie.L.List.Item
              description="Common music container"
              accent="success"
              title="Music"
              activatable
              ph="small"
              pv="tiny"
              r
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
                  mr="tiny"
                  r="large"
                  p="small"
                  bg
                />
              }
            />

            <Mie.L.List.Item
              description="Network configurations"
              accent="warning"
              title="Remote"
              activatable
              ph="small"
              pv="tiny"
              r
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
                  mr="tiny"
                  p="small"
                  r="large"
                  bg
                />
              }
            />
          </Mie.L.List>
        </Mie.L.View>
      </Mie.L.View>
    </Mie.L.View>
  )
} 