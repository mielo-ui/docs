import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function Button() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Button">
      <Mie.L.Header title="Button" size="small" mb="small" />

      <Mie.L.View className="card" bg="panel" r="large" p="large" shadow fc f>
        <Mie.L.View f fc fai="start" fjc="start" gr="tiny">
          <Mie.L.View f fr gc="tiny">
            <Mie.Button label="Success" accent="success" />
            <Mie.Button label="Warning" accent="warning" />
            <Mie.Button label="Error" accent="error" />
          </Mie.L.View>
          <Mie.L.View f fr gc="tiny">
            <Mie.Button label="Accent" accent />
            <Mie.Button label="Default" />
          </Mie.L.View>
        </Mie.L.View>

        <Mie.L.Header mt="large" mb="small" title="With Icon" size="tiny" />
        <Mie.L.Divider mb="large" />

        <Mie.L.View f fr fai="start" fjc="start" gc="tiny">
          <Mie.Button icon={<Mie.Icon icon={<Icons.Status.MailUnread />} />} />

          <Mie.Button
            icon={<Mie.Icon icon={<Icons.Actions.ListAdd />} />}
            circular
          />

          <Mie.Button
            icon={
              <Mie.L.Icon mr="small" icon={<Icons.Actions.BookmarkNew />} />
            }
            label="Add Bookmark"
          />
        </Mie.L.View>

        <Mie.L.Header mt="large" mb="small" title="Styled" size="tiny" />
        <Mie.L.Divider mb="large" />

        <Mie.L.View f fr gc="tiny">
          <Mie.L.Button label="Pilled" pilled ph="large" />
          <Mie.Button label="Filled Accent" filled accent />
        </Mie.L.View>

        <Mie.L.Header mt="large" mb="small" title="Custom Styled" size="tiny" />
        <Mie.L.Divider mb="large" />

        <Mie.L.View f fr fai="start" fjc="start" gc="tiny">
          <Mie.L.Button
            accent="warning"
            pl="none"
            pv="none"
            pilled
            pr
            label={
              <Mie.L.Text fbold accent="warning" ml="tiny">
                Pilled
              </Mie.L.Text>
            }
            icon={
              <Mie.L.Icon
                icon={<Icons.Actions.FolderNew />}
                accent="warning"
                rl="circular"
                pl="small"
                pv="tiny"
                pr="tiny"
                bg
              />
            }
          />

          <Mie.L.Button
            pl="none"
            pv="none"
            accent
            pr
            label={
              <Mie.L.Text color="blue" fbold ml="tiny">
                Labeled
              </Mie.L.Text>
            }
            icon={
              <Mie.L.Icon
                icon={<Icons.Actions.FolderNew />}
                color="blue"
                pl="small"
                p="tiny"
                bg
                rl
              />
            }
          />

          <Mie.L.Button
            pr="small"
            pl="none"
            pv="none"
            filled
            accent
            label={
              <Mie.L.Text fbold color="light" ml="small">
                Filled
              </Mie.L.Text>
            }
            icon={
              <Mie.L.Icon
                icon={<Icons.Actions.FolderNew />}
                color="light"
                p="tiny"
                accent
                rl
                bg
              />
            }
          />
        </Mie.L.View>

        <Mie.L.View f fr mt fai="center" gc="large">
          <Mie.L.Button
            label="Bob Success"
            accent="success"
            ph="massive"
            pilled
            filled
          />

          <Mie.Button
            label="Tertiary Error"
            accent="error"
            transparent
            tertiary
          />
        </Mie.L.View>
      </Mie.L.View>
    </Mie.L.View>
  )
} 