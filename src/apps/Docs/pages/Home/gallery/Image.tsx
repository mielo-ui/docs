import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useSelector } from "react-redux"

import whiteframe from "../../../../../images/whiteframe.png"
import darkframe from "../../../../../images/darkframe.png"
import * as selectors from "../../../selectors"

export function Image() {
  const darkThemeEnable = useSelector(selectors.darkThemeEnable)
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Image">
      <Mie.L.Header title="Image" size="small" mb="small" />

      <Mie.L.View
        className="card"
        fai="stretch"
        bg="panel"
        r="large"
        p="large"
        shadow
        fc
        f
      >
        <Mie.L.Image
          src={darkThemeEnable ? darkframe : whiteframe}
          style={{ backgroundSize: "cover" }}
          fjc="center"
          fai="center"
          container
          r="large"
          ph="massive"
          pv="big"
          fc
          f
          f1
        >
          <Mie.L.Button
            label={<Mie.L.Text color="light">Image Box</Mie.L.Text>}
            accent="success"
            size="large"
            ph="massive"
            filled
            pilled
          />
        </Mie.L.Image>
      </Mie.L.View>
    </Mie.L.View>
  )
} 