import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

import whiteframe from "../../../images/whiteframe.png"

export function Image() {
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
        <Mie.L.View f fr fjc="center" sbh="large">
          <Mie.L.Image src={whiteframe} accent="success" size="mini" r />

          <Mie.L.Image
            src={whiteframe}
            accent="warning"
            size="mini"
            bordered
            r="large"
          />
          <Mie.L.Image
            src={whiteframe}
            accent="error"
            size="mini"
            bordered
            circular
          />
          <Mie.L.Image
            src={whiteframe}
            accent="success"
            size="mini"
            circular
            bordered
            r
          />
        </Mie.L.View>

        <Mie.L.Image
          style={{ backgroundSize: "contain", width: "100%" }}
          src={whiteframe}
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