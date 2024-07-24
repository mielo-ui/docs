import { useCallback, MouseEvent } from "react"
import { useLocation, useRoute } from "wouter"
import * as Mie from "mielo-react"

export interface ListItemLinkProps {
  size?: "small" | "large"
  title: string
  link: string
}

export function ListItemLink({ title, link, size }: ListItemLinkProps) {
  const [_, navigate] = useLocation()
  const [isActive] = useRoute(`/${link}`)

  const onClickLink = useCallback(
    (event: MouseEvent<any>) => {
      event.preventDefault()
      event.stopPropagation()
      navigate(`/${link}`)
    },
    [link, title],
  )

  return (
    <Mie.L.ListItem
      onClick={onClickLink}
      active={isActive}
      link={`/${link}`}
      title={title}
      activatable
      size={size}
      ph="large"
      mh="small"
      pv
      r
    />
  )
}

