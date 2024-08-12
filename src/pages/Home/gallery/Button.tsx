import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function Button() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Button">
      <Mie.L.Header title="Button" size="small" mb="small" />

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
        <Mie.L.View f fc fai="start" fjc="start" sbv="tiny">
          <Mie.L.View f fr sbh="tiny">
            <Mie.Button label="Success" accent="success" />
            <Mie.Button label="Warning" accent="warning" />
            <Mie.Button label="Error" accent="error" />
          </Mie.L.View>
          <Mie.L.View f fr sbh="tiny">
            <Mie.Button label="Accent" accent />
            <Mie.Button label="Default" />
          </Mie.L.View>
        </Mie.L.View>

        <Mie.L.View f fr fai="start" fjc="start" sbh="tiny">
          <Mie.Button icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />} />

          <Mie.Button
            icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
            circular
          />

          <Mie.Button
            icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
            label="Label"
          />
        </Mie.L.View>

        <Mie.L.View f fr sbh="tiny">
          <Mie.L.Button label="Pilled + Padding" pilled ph="large" />
          <Mie.Button label="Filled Accent" filled accent />
        </Mie.L.View>

        <Mie.L.View f fr fai="start" fjc="start" sbh="tiny">
          <Mie.Button
            icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
            iconLabeled
            label="Button"
            filled
            accent
            pilled
          />

          <Mie.Button
            icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
            iconLabeled
            label="Button"
            accent
          />

          <Mie.Button
            icon={<Mie.Icon icon={<Icons.Actions.FolderNew />} />}
            iconLabeled
            label="Button"
            filled
            accent
          />
        </Mie.L.View>

        <Mie.L.View f fr fai="center" sbh="large">
          <Mie.L.Button
            label="Pill + Sized"
            accent="success"
            size="large"
            ph="massive"
            pilled
            filled
          />

          <Mie.Button
            label="Tertiary Success"
            accent="success"
            transparent
            tertiary
          />
        </Mie.L.View>
      </Mie.L.View>
    </Mie.L.View>
  )
} 