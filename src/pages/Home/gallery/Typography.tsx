import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function Typography() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Typography">
      <Mie.L.Header title="Typography" size="small" mb="small" />

      <Mie.L.View className="card" bg="panel" r="large" p="large" shadow fc f>
        <Mie.L.View sbv="large" f fc>
          <Mie.Header
            subtitle="Example of header"
            title="Union Header"
            size="small"
          />

          <Mie.Header
            subtitle="Detailed subtitle as common"
            title="Inverted Header"
            size="small"
            inverted
          />
        </Mie.L.View>

        <Mie.L.Header mt="large" mb="small" title="With Icon" size="tiny" />
        <Mie.L.Divider mb="large" />

        <Mie.L.View f fc sbv="massive">
          <Mie.Header
            subtitle="Start next step?"
            title="Checkpoint!"
            size="tiny"
            center
            icon={
              <Mie.L.Icon
                icon={<Icons.Categories.EmojiFlags />}
                accent="success"
                p="small"
                circular
                bg
              />
            }
          />

          <Mie.Header
            icon={
              <Mie.L.Icon
                icon={<Icons.Status.AvatarDefault />}
                size="small"
                p="tiny"
                accent
                bg
                r
              />
            }
            subtitle="sample_email@gmail.com"
            title="John Doe"
            size="tiny"
            iconSided
          />
        </Mie.L.View>

        <Mie.L.Header mt="large" mb="small" title="Sizes" size="tiny" />
        <Mie.L.Divider mb="large" />

        <Mie.L.View f fc sbv="small" fai="start">
          <Mie.Header title="Title 1" size="huge" />
          <Mie.Header title="Title 2" size="big" />
          <Mie.Header title="Title 3" size="large" />
          <Mie.Header title="Title 4" />
          <Mie.Header title="Title 5" size="small" />
          <Mie.Header title="Title 6" size="tiny" />
        </Mie.L.View>

        <Mie.L.Header
          mt="massive"
          mb="small"
          title="Text Accents"
          size="tiny"
        />
        
        <Mie.L.Divider mb="large" />

        <Mie.L.View f fc sbv="small" fai="start">
          <Mie.Text>Text Default</Mie.Text>
          <Mie.Text accent>Accent</Mie.Text>
          <Mie.Text accent="success">Success</Mie.Text>
          <Mie.Text accent="warning">Warning</Mie.Text>
          <Mie.Text accent="error">Error</Mie.Text>
        </Mie.L.View>
      </Mie.L.View>
    </Mie.L.View>
  )
} 