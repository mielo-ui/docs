import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function Label() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Label">
      <Mie.L.Header title="Label" size="small" mb="small" />

      <Mie.L.View
        className="card"
        fai="start"
        bg="content"
        r="large"
        p="large"
        shadow
        fc
        f
      >
        <Mie.L.View f fr gc="tiny">
          <Mie.Label accent>Accent</Mie.Label>
          <Mie.Label accent="warning">Warning</Mie.Label>
          <Mie.Label accent="error">Error</Mie.Label>
          <Mie.Label accent="success">Success</Mie.Label>
        </Mie.L.View>

        <Mie.L.Header mt="large" mb="small" title="Transparent" size="tiny" />
        <Mie.L.Divider mb="large" />

        <Mie.L.View f fr fai="center" gc="small">
          <Mie.Label size="small" bordered transparent accent>
            Label
          </Mie.Label>

          <Mie.Label size="small" bordered transparent accent="warning">
            Label
          </Mie.Label>

          <Mie.Label size="small" bordered transparent accent="error">
            Label
          </Mie.Label>

          <Mie.Label size="small" bordered transparent accent="success">
            Label
          </Mie.Label>
        </Mie.L.View>

        <Mie.L.Header mt="large" mb="small" title="Sizes" size="tiny" />
        <Mie.L.Divider mb="large" />

        <Mie.L.View f fr sbh fai="center">
          <Mie.L.View f fr fai="center" gc="small">
            <Mie.Label size="small" circular accent>
              10
            </Mie.Label>

            <Mie.Label circular accent="warning">
              15
            </Mie.Label>

            <Mie.Label size="large" circular accent="error">
              20
            </Mie.Label>

            <Mie.Label size="big" circular accent="success">
              25
            </Mie.Label>
          </Mie.L.View>

          <Mie.L.View f fr fai="center" gc="small">
            <Mie.Label size="big" circular accent />
            <Mie.Label size="large" circular accent="success" />
            <Mie.Label circular accent="error" />
            <Mie.Label size="small" circular accent="warning" />
          </Mie.L.View>
        </Mie.L.View>

        <Mie.L.Header mt="large" mb="small" title="Labeled" size="tiny" />
        <Mie.L.Divider mb="large" />

        <Mie.L.View f fr fw fai="center" fjc="center" gc="large">
          <Mie.L.Item
            label={
              <Mie.Label accent size="small" floating>
                +100
              </Mie.Label>
            }
            title="Labeled Item"
            size="small"
            activatable
            p="tiny"
            hover
            r
          />

          <Mie.L.Item
            label={
              <Mie.Label size="small" accent="error" circular floating>
                <Mie.L.Icon icon={<Icons.Places.FolderVideos />} size="small" />
              </Mie.Label>
            }
            title="Labeled Item"
            size="small"
            activatable
            p="tiny"
            hover
            r
          />
        </Mie.L.View>

        <Mie.L.Item
          label={
            <Mie.Label size="small" accent="success" floating="ftl">
              top left
            </Mie.Label>
          }
          title="Labeled Item"
          size="small"
          activatable
          mt="large"
          p="tiny"
          hover
          r
        />
      </Mie.L.View>
    </Mie.L.View>
  )
} 