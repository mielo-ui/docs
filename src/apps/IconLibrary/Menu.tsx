import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useMediaQuery } from "usehooks-ts"
import { useState } from "react"

export interface MenuProps {
  onUpdate: (searchFor: Record<string, boolean>) => void
  searchFor: Record<string, boolean>
}

const colors = [
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
  "purple",
  "brown",
  "pink",
  "deeppurple",
  "indigo",
  "lightgreen",
  "deeporange",
  "light",
  "dark",
]

export function Menu({ searchFor, onUpdate }: MenuProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [open, setOpen] = useState(false)

  const items = Object.entries(searchFor).map(([group, isEnabled], idx) => (
    <Mie.L.Item
      key={`${group}-${isEnabled}`}
      disableSidePropagation
      title={group}
      ph="tiny"
      r
      icon={
        <Mie.L.Checkbox
          color={colors[idx] as Mie.CoreColor}
          name={`enable-${group}-icons`}
          checked={isEnabled}
          pv="tiny"
          mr
          onChange={event => {
            const { checked } = event.target
            onUpdate({
              ...searchFor,
              [group]: checked,
            })
          }}
        />
      }
      side={
        <Mie.Button
          icon={<Mie.Icon size="tiny" icon={<Icons.Actions.GoNext />} />}
          circular
        />
      }
    />
  ))

  return isMobile ? (
    <>
      <Mie.L.Button
        icon={<Mie.L.Icon mr="small" icon={<Icons.Actions.ViewListBullet />} />}
        onClick={() => setOpen(prev => !prev)}
        label="Menu & Filters"
      />

      <Mie.L.Collapsible f fc open={open}>
        <Mie.L.View className="search-for-menu" gr="tiny">
          {items}
        </Mie.L.View>
      </Mie.L.Collapsible>
    </>
  ) : (
    <Mie.L.View className="search-for-menu" gr="tiny">
      {items}
    </Mie.L.View>
  )
}