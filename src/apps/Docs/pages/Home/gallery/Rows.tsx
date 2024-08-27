import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function Rows() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Rows">
      <Mie.L.Header title="Rows" size="small" mb="small" />

      <Mie.L.View
        className="card"
        bg="panel"
        r="large"
        p="large"
        shadow
        sbv
        fc
        f
      ></Mie.L.View>
    </Mie.L.View>
  )
} 