import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useMemo, useState } from "react"

import { collectIcons, searchForDefault } from "./icons"
import { IconGroup } from "./Group"
import { Menu } from "./Menu"

export function IconLibrary() {
  const [searchFor, setSearchFor] = useState(searchForDefault)
  const [search, setSearch] = useState("")

  const icons = useMemo(() => collectIcons(search, searchFor), [search])

  return (
    <Mie.L.View className="icon-library" f fc gr="huge">
      <Mie.Header
        subtitle="Components generated from original library"
        title="Adwaita Icons"
        size="huge"
        center
        icon={
          <Mie.L.Icon
            icon={<Icons.Emblems.EmblemDocuments />}
            size={!search.length ? "huge" : undefined}
            mb="large"
            p="large"
            r="large"
            accent
            bg
          />
        }
      />

      <Mie.L.Entry
        onChange={event => setSearch(event.target.value)}
        placeholder="Enter search query"
        label="Search"
        value={search}
        size="large"
        name="search"
        transparent
        bordered
        r="large"
        shadow
      />

      {/* <Menu searchFor={searchFor} onUpdate={setSearchFor} /> */}

      <Mie.View className="gallery">
        {icons.map(groupProps => (
          <IconGroup key={`group-${groupProps.name}`} {...groupProps} />
        ))}
      </Mie.View>
    </Mie.L.View>
  )
}
