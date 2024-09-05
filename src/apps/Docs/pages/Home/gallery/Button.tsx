import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function Button() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Button">
      <Mie.L.Header title="Button" size="small" mb="small" />

      <Mie.L.View className="card" bg="content" r="large" p="large" shadow fc f>
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

          <Mie.Button
            label={<Mie.Text color="light">Accent Filled</Mie.Text>}
            filled
            accent
          />
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
              <Mie.L.Text color="orange" ml="small">
                Pilled
              </Mie.L.Text>
            }
            icon={
              <Mie.L.Icon
                icon={<Icons.Actions.FolderNew />}
                color="orange"
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
              <Mie.L.Text color="light" fbold ml="tiny">
                Labeled
              </Mie.L.Text>
            }
            icon={
              <Mie.L.View color="blue" pv="tiny" pl="tiny" pr="tiny" rl>
                <Mie.L.Icon icon={<Icons.Actions.FolderNew />} color="light" />
              </Mie.L.View>
            }
          />

          <Mie.L.Button
            color="pink"
            pr="small"
            pl="none"
            pv="none"
            filled
            label={
              <Mie.L.Text fbold color="light" ml="tiny">
                Filled
              </Mie.L.Text>
            }
            icon={
              <Mie.L.View color="pink" pv="tiny" pl="tiny" pr="tiny" rl>
                <Mie.L.Icon icon={<Icons.Actions.FolderNew />} color="light" />
              </Mie.L.View>
            }
          />
        </Mie.L.View>

        <Mie.L.View f fr mt fai="center" gc="large">
          <Mie.L.Button
            label={<Mie.Text color="light">Bob Success</Mie.Text>}
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