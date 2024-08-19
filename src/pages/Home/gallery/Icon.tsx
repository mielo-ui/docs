import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function Icon() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Icon">
      <Mie.L.Header title="Icon" size="small" mb="small" />

      <Mie.L.View
        className="card"
        gr="big"
        fjc="center"
        fai="center"
        bg="panel"
        r="large"
        p="large"
        shadow
        fc
        f
      >
        <Mie.L.View f fc gr="small" fai="center">
          <Mie.L.View f fr gc="small" fai="center">
            <Mie.Icon icon={<Icons.Places.Folder />} size="mini" />
            <Mie.Icon icon={<Icons.Places.FolderDocuments />} size="tiny" />
            <Mie.Icon icon={<Icons.Places.FolderDownload />} size="small" />
            <Mie.Icon icon={<Icons.Places.FolderVideos />} />
            <Mie.Icon icon={<Icons.Places.FolderMusic />} size="large" />
            <Mie.Icon icon={<Icons.Places.FolderPictures />} size="big" />
          </Mie.L.View>

          <Mie.L.View f fr gc="small" fai="center" mt="large">
            <Mie.Icon icon={<Icons.Places.FolderRemote />} size="huge" />
            <Mie.Icon icon={<Icons.Places.FolderTemplates />} size="massive" />
          </Mie.L.View>
        </Mie.L.View>

        <Mie.Divider />

        <Mie.L.View f fr gc="small" fjc="center">
          <Mie.L.Icon
            icon={<Icons.Places.FolderDocuments />}
            r="tiny"
            size="large"
            p="tiny"
            accent
            bg
          />

          <Mie.L.Icon
            icon={<Icons.Devices.AuthFace />}
            accent="warning"
            size="large"
            r="small"
            p="tiny"
            filled
          />

          <Mie.L.Icon
            icon={<Icons.Status.AuthSimLocked />}
            accent="error"
            size="large"
            r="large"
            p="tiny"
            bg
          />

          <Mie.L.Icon
            icon={<Icons.Emblems.EmblemMusic />}
            accent="success"
            size="large"
            p="tiny"
            circular
            bg
          />
        </Mie.L.View>

        <Mie.L.View f fr gc="large" fjc="center">
          <Mie.L.Icon
            icon={<Icons.Status.DialogInformation />}
            size="large"
            accent
          />
          <Mie.L.Icon
            icon={<Icons.Status.DialogWarning />}
            accent="warning"
            size="large"
          />
          <Mie.L.Icon
            icon={<Icons.Status.DialogError />}
            accent="error"
            size="large"
          />
          <Mie.L.Icon
            icon={<Mie.Icons.EmblemOk />}
            accent="success"
            size="large"
          />
        </Mie.L.View>
      </Mie.L.View>
    </Mie.L.View>
  )
} 