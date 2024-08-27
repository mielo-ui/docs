import * as Mie from "@mielo-ui/mielo-react"
import { IconCard, IconCardProps } from "./Icon"

export interface IconSubGroup {
  name: string
  icons: IconCardProps[]
}

export interface IconGroupProps {
  name: string
  icons: Array<IconSubGroup | IconCardProps>
}

export function IconGroup({ icons: _icons, name }: IconGroupProps) {
  const icons = _icons.filter((item: any) => !item?.icons) as IconCardProps[]

  return (
    <Mie.L.View className="group" f fc gr="huge" mt="large">
      <Mie.L.Header title={name} size="small" />

      <Mie.L.View className="icons" f fr fw>
        {icons.map(cardProps => (
          <IconCard key={`card-${cardProps.name}`} {...cardProps} />
        ))}
      </Mie.L.View>
    </Mie.L.View>
  )
}