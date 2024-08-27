import { useSelector, useDispatch } from "react-redux"
import * as Mie from "@mielo-ui/mielo-react"

import { AppDispatch, setUiFont } from "../../state"
import * as selectors from "../../selectors"

const options: Mie.OptionValue[] = ["Roboto", "Inter", "Ubuntu"].map(title => ({
  value: title,
  pv: "tiny",
  title,
}))

export function FontSwitcher() {
  const uiFont = useSelector(selectors.uiFont)
  const selected = options.find(option => option.value === uiFont)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Mie.L.Select
      onChange={option => dispatch(setUiFont(option.value))}
      options={options}
      value={selected}
      menuHeight="8rem"
      size="small"
      label="Font"
      name="font"
      transparent
      bordered
    />
  )
}