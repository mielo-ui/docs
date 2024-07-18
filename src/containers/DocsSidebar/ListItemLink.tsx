import { useCallback, MouseEvent } from "react"
import { useLocation, useRoute } from "wouter"
import * as Mie from "mielo-react"

export interface ListItemLinkProps {
  title: string
  link: string
}

export function ListItemLink({ title, link }: ListItemLinkProps) {
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
    <Mie.ListItem
      onClick={onClickLink}
      active={isActive}
      link={`/${link}`}
      title={title}
      activatable
    />
  )
}

