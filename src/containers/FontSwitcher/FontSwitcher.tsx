import { useSelector, useDispatch } from "react-redux"
import * as Mie from "@mielo-ui/mielo-react"

import * as selectors from "../../selectors"
import { AppDispatch } from "../../store"
import { setUiFont } from "../../states"

export interface FontSwitcherProps {}

export function FontSwitcher(props: FontSwitcherProps) {
  const uiFont = useSelector(selectors.uiFont)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Mie.L.Select
      onChange={option => dispatch(setUiFont(option.value))}
      value={{ label: uiFont, value: uiFont }}
      size="small"
      label="Font"
      name="font"
      options={[
        { label: "Roboto", value: "Roboto" },
        { label: "Inter", value: "Inter" },
        { label: "Cantarell", value: "Cantarell" },
      ]}
    />
  )
}