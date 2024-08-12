import { useSelector, useDispatch } from "react-redux"
import * as Mie from "@mielo-ui/mielo-react"

import * as selectors from "../../selectors"
import { AppDispatch } from "../../store"
import { setUiFont } from "../../states"

const options: Mie.OptionValue[] = ["Roboto", "Inter", "Ubuntu"].map(title => ({
  title,
  value: title,
}))

export function FontSwitcher() {
  const uiFont = useSelector(selectors.uiFont)
  const dispatch = useDispatch<AppDispatch>()
  const selected = options.find(option => option.value === uiFont)

  return (
    <Mie.L.Select
      onChange={option => dispatch(setUiFont(option.value))}
      options={options}
      value={selected}
      size="small"
      label="Font"
      name="font"
    />
  )
}