import { useCallback, MouseEvent } from "react"
import { useLocation, useRoute } from "wouter"
import { useMediaQuery } from "usehooks-ts"
import { useDispatch } from "react-redux"

import * as Mie from "@mielo-ui/mielo-react"
import { AppDispatch, toggleSidebar } from "../../state"

export function ListItemLink({ link, ...props }: any) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const dispatch = useDispatch<AppDispatch>()
  const [_, navigate] = useLocation()
  const [isActive] = useRoute(link)

  const onClickLink = useCallback(
    (event: MouseEvent<any>) => {
      event.stopPropagation()
      event.preventDefault()
      
      if (isMobile) {
        dispatch(toggleSidebar())
      }

      navigate(link)
    },
    [link, isMobile],
  )

  return <Mie.L.List.Item onClick={onClickLink} hover={isActive} {...props} />
}

