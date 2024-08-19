import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function Message() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Message">
      <Mie.L.Header title="Message" size="small" mb="small" />

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
        <Mie.Message title="Default Titled Message" />
        <Mie.Message title="Accent Message" onClose={() => {}} accent />
        <Mie.Message
          icon={
            <Mie.L.Icon
              icon={<Icons.Status.DialogWarning />}
              accent="warning"
              size="large"
              mr="small"
              mt="mini"
            />
          }
          title="Warning With Icon"
          description="Short message description text"
          onClose={() => {}}
          accent="warning"
        />
        <Mie.Message
          icon={
            <Mie.L.Icon
              icon={<Icons.Status.DialogWarning />}
              accent="error"
              mr="tiny"
              mt="mini"
              p="tiny"
              circular
              bg
            />
          }
          title="Error With Custom Icon"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          onClose={() => {}}
          accent="error"
        />
      </Mie.L.View>
    </Mie.L.View>
  )
} 