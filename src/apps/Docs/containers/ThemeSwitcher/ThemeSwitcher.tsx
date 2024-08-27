import { useSelector, useDispatch } from "react-redux"
import * as Mie from "@mielo-ui/mielo-react"

import { AppDispatch, setTheme } from "../../state"
import * as selectors from "../../selectors"

const options: Mie.OptionValue[] = ["Default", "Material"].map(title => ({
  value: title,
  pv: "tiny",
  title,
}))

export function ThemeSwitcher() {
  const theme = useSelector(selectors.uiTheme)
  const dispatch = useDispatch<AppDispatch>()
  const selected = options.find(option => option.value === theme)

  return (
    <Mie.L.Select
      onChange={option => dispatch(setTheme(option.value))}
      options={options}
      value={selected}
      menuHeight="8rem"
      label="Theme"
      name="theme"
      size="small"
      transparent
      bordered
    />
  )
}