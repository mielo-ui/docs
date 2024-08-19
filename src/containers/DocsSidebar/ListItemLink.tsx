import { useCallback, MouseEvent } from "react"
import { useLocation, useRoute } from "wouter"
import * as Mie from "@mielo-ui/mielo-react"

export function ListItemLink({ link, ...props }: any) {
  const [_, navigate] = useLocation()
  const [isActive] = useRoute(link)

  const onClickLink = useCallback(
    (event: MouseEvent<any>) => {
      event.preventDefault()
      event.stopPropagation()
      navigate(link)
    },
    [link],
  )

  return <Mie.L.List.Item onClick={onClickLink} hover={isActive} {...props} />
}

