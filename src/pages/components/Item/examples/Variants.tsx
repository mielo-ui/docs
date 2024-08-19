import { Fragment } from "react/jsx-runtime"
import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Variants.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Variants() {
  const variants = [
    <Mie.Item title="Item Title" description="Description line" />,

    <Mie.Item
      icon={
        <Mie.L.Icon
          mr="small"
          icon={<Icons.Status.NetworkCellularSignalWeak />}
        />
      }
      description="Some description text"
      title="Item Title"
      side={
        <Mie.Button
          accent="error"
          size="small"
          circular
          icon={
            <Mie.L.Icon
              icon={<Icons.Places.UserTrash />}
              accent="error"
              size="small"
            />
          }
        />
      }
    />,

    <Mie.Item
      icon={<Mie.L.Icon mr="small" icon={<Icons.Status.DialogError />} />}
      title="Item Title"
    />,

    <Mie.Divider />,

    <Mie.Item
      icon={<Mie.L.Icon mb="small" icon={<Icons.Status.Alarm />} />}
      title="Vertical Item Title"
      description="Description message"
      vertical
      center
    />,
  ]
  return (
    <Mie.L.View f f1 fc gr="large">
      {variants.map((di, idx) => (
        <Fragment key={`variant-${idx}`}>{di}</Fragment>
      ))}
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `

`.trim()

export default Object.assign(Variants, {
  title: "Variants",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})