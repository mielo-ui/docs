import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import { useMemo, useState } from "react"
import * as Mie from "@mielo-ui/mielo-react"

const { entries } = Object

export function Library() {
  const [search, setSearch] = useState("")

  const icons: any = useMemo(
    () =>
      entries(Icons)
        .map(([group, iconsMap]) => {
          const filtredMap = entries(iconsMap).filter(([name]) =>
            name.includes(search),
          )

          return [group, filtredMap]
        })
        .filter(([_group, iconsMap]) => iconsMap.length > 0),
    [search],
  )

  return (
    <Mie.L.View className="icon-library" f fc>
      <Mie.Header
        icon={
          <Mie.L.Icon
            icon={<Icons.Emblems.EmblemDocuments />}
            size="huge"
            accent
            bg
            mb="large"
            p="large"
            r="large"
          />
        }
        subtitle="Components generated from original library"
        title="Adwaita Icons"
        size="huge"
        center
      />

      <Mie.L.Entry
        onChange={event => setSearch(event.target.value)}
        placeholder="Enter search query"
        label="Search"
        value={search}
        size="large"
        name="search"
        mt="huge"
        r="large"
        shadow
      />

      {icons.length > 0 ? (
        <Mie.L.View
          className="library"
          mt="massive"
          sbv="large"
          scrollable
          r="large"
          shadow
          fc
          f
        >
          {icons.map(([group, iconsMap]) => (
            <Mie.L.View className="group" pb="massive" bg="panel" f fc>
              <Mie.L.Header
                title={group as any}
                size="large"
                m="massive"
                center
              />

              <Mie.L.View className="cards" f fr fw fjc="center" mt="massive">
                {iconsMap.map(([name, Component]) => (
                  <Mie.L.View
                    className="icon-card"
                    activatable
                    fjc="center"
                    fai="center"
                    key={name}
                    mb="massive"
                    fc
                    r
                    f
                  >
                    <Mie.L.Header
                      icon={<Mie.L.Icon icon={<Component />} mb="massive" />}
                      title={name}
                      size="small"
                    />
                  </Mie.L.View>
                ))}
              </Mie.L.View>
            </Mie.L.View>
          ))}
        </Mie.L.View>
      ) : (
        <Mie.L.View
          scrollable
          bg="content"
          shadow
          mt="massive"
          fjc="center"
          fai="center"
          r="large"
          p="large"
          f1
          fc
          f
        >
          <Mie.Header
            subtitle="Component with that name not found"
            title="Not Found"
            size="large"
            center
            icon={
              <Mie.L.Icon
                icon={<Icons.Status.DialogInformation />}
                size="massive"
              />
            }
          />
        </Mie.L.View>
      )}
    </Mie.L.View>
  )
}
