import * as Mie from "@mielo-ui/mielo-react"
import { FunctionComponent } from "react"

export interface IconCardProps {
  component: FunctionComponent
  name: string
}

export function IconCard({ component: Component, name }: IconCardProps) {
  return (
    <Mie.L.Activatable
      className="icon-card"
      fai="center"
      fjc="center"
      pv="small"
      gr="small"
      ph
      fc
      r
      f
    >
      <Mie.L.Icon icon={<Component />} size="large" />
      <Mie.L.Header title={name} size="tiny" center inverted />
    </Mie.L.Activatable>
  )
}