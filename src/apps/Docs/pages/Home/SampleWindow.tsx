import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

import { useMediaQuery } from "usehooks-ts"
import { useState } from "react"

export function SampleWindow() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [open, setOpen] = useState(false)

  return (
    <Mie.L.Window
      split={{
        overlay:
          isMobile &&
          open &&
          function () {
            setOpen(false)
          },

        headerbar: (
          <Mie.HeaderBar
            controls={<Mie.Window.Controls controls={["minimize", "close"]} />}
            header={<Mie.Header title="Default title" size="tiny" />}
            transparent
            left={
              <Mie.Button
                icon={<Mie.L.Icon icon={<Icons.Actions.SidebarShow />} />}
                onClick={() => setOpen(prev => !prev)}
                transparent
              />
            }
          />
        ),
        sidebar: (
          <Mie.SplitView.Sidebar
            animateStyle={isMobile ? "overlap" : "width"}
            opened={open}
            size="small"
          >
            <Mie.L.Header
              subtitle="@nickname"
              title="Fullname"
              size="tiny"
              iconSided
              ph="small"
              pv="tiny"
              icon={
                <Mie.L.Icon
                  icon={<Icons.Emotes.FaceSmirk />}
                  r="circular"
                  mr="small"
                  p="tiny"
                  accent
                  bg
                />
              }
            />

            <Mie.L.List f f1 fc fjc="center" ph="tiny" mt="small">
              {[
                { icon: <Icons.Places.FolderPictures />, title: "Pictures" },
                { icon: <Icons.Places.FolderVideos />, title: "Videos" },
                { icon: <Icons.Places.FolderMusic />, title: "Music" },
              ].map(({ icon, title }, idx) => (
                <Mie.L.Item
                  icon={<Mie.L.Icon icon={icon} mr="small" />}
                  key={`item-${title}-${idx}`}
                  title={title}
                  activatable
                  pv="small"
                  ph="small"
                  r
                />
              ))}
            </Mie.L.List>
          </Mie.SplitView.Sidebar>
        ),
      }}
    >
      <Mie.L.View f fc fai="center" fjc="center" p="massive" gr="large">
        <Mie.Header
          subtitle="Starter text"
          title="Welcome"
          size="large"
          center
        />

        <Mie.L.Button
          icon={<Mie.L.Icon mr="small" icon={<Icons.Actions.FolderNew />} />}
          label="Choose Folder"
          ph="large"
          pv="small"
          pilled
        />
      </Mie.L.View>
    </Mie.L.Window>
  )
}