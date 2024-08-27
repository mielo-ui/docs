import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import { capitalCase } from "change-case"

import { IconGroupProps } from "./Group"

export const searchForDefault = Object.keys(Icons).reduce(
  (opts, group) => {
    opts[group] = true
    return opts
  },
  {} as Record<string, boolean>,
)

export function collectIcons(
  search: string,
  searchFor: Record<string, boolean> = searchForDefault,
): IconGroupProps[] {
  const out: IconGroupProps[] = []

  for (const [group, _icons] of Object.entries(Icons)) {
    if (searchFor[group]) {
      const icons = Object.entries(_icons)
        .filter(([name]) => (search ? name.includes(search) : true))
        .map(([name, component]) => ({
          name: capitalCase(name),
          component,
        }))

      if (icons.length > 0) {
        out.push({
          name: capitalCase(group),
          icons,
        })
      }
    }
  }

  return out
}