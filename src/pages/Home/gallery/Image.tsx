import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useSelector } from "react-redux"

import whiteframe from "../../../images/whiteframe.png"
import darkframe from "../../../images/darkframe.png"
import * as selectors from "../../../selectors"

export function Image() {
  const darkThemeEnable = useSelector(selectors.darkThemeEnable)
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Image">
      <Mie.L.Header title="Image" size="small" mb="small" />

      <Mie.L.View
        className="card"
        fai="center"
        bg="panel"
        r="large"
        p="large"
        shadow
        sbv
        fc
        f
      >
        <Mie.L.Image
          style={{ width: "18rem", height: "18rem" }}
          src={darkThemeEnable ? darkframe : whiteframe}
          fjc="center"
          fai="center"
          container
          r="large"
          ph="massive"
          pv="big"
          fc
          f
        >
          <Mie.L.Button label="Image Box" ph="big" filled accent pilled />
        </Mie.L.Image>
      </Mie.L.View>
    </Mie.L.View>
  )
} 