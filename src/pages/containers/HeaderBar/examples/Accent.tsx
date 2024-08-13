import { useState } from "react"
import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Accent() {
  const [accent, setAccent] = useState<Mie.OptionValue | undefined>()
  const [isAccentWindow, setIsAccentWindow] = useState(false)
  const [isTransparent, setIsTransparent] = useState(false)

  const times: Mie.OptionValue[] = [
    {
      title: "None",
      value: undefined,
    },
    {
      title: "Accent",
      value: true,
    },
    {
      title: "Warning",
      value: "warning",
    },
    {
      title: "Error",
      value: "error",
    },
    {
      title: "Success",
      value: "success",
    },
  ]

  const accents = {
    morning: "success",
    day: "warning",
    night: true,
  }

  const accentsOptions = times.map(defaultTime => ({
    accent: accents[defaultTime.value],
    ...defaultTime,
  }))

  return (
    <Mie.L.View f f1 fai="center" fjc="center" mt="big">
      <Mie.L.Window
        accent={isAccentWindow && accent && accent.value}
        shadow
        style={{
          paddingBottom: "10rem",
          width: "100%",
        }}
        headerbar={{
          controls: <Mie.Window.Controls controls={["minimize", "close"]} />,
          header: <Mie.Header size="tiny" title="Default Title" center />,
          accent: accent && accent.value,
          transparent: isTransparent,
          
          left: (
            <Mie.Button icon={<Mie.Icon icon={<Icons.Places.UserHome />} />} />
          ),
          right: (
            <Mie.L.Button
              icon={<Mie.Icon icon={<Icons.Places.UserTrash />} />}
              mr="small"
            />
          ),
        }}
      >
        <Mie.L.View
          bg="content"
          fjc="center"
          sbv="large"
          m="massive"
          p="large"
          r="large"
          shadow
          fc
          f
        >
          <Mie.Item
            description="Make HeaderBar transparentize"
            title="Transparent"
            side={
              <Mie.Checkbox
                onChange={event => setIsTransparent(event.target.checked)}
                checked={isTransparent}
                name="is-transparent"
                accent="success"
                toggle
              />
            }
          />

          <Mie.Item
            description="Also change window background accent"
            title="Window Accent"
            side={
              <Mie.Checkbox
                onChange={event => setIsAccentWindow(event.target.checked)}
                checked={isAccentWindow}
                name="is-accent-window"
                accent="success"
                toggle
              />
            }
          />

          <Mie.Item
            description="Make HeaderBar transparentize"
            title="Transparent"
            side={
              <Mie.Select
                onChange={option => setAccent(option)}
                options={accentsOptions}
                label="Accent"
                size="small"
                value={accent}
                name="accent"
                prefix={
                  <Mie.L.View pl f fai="center" fjc="center">
                    <Mie.Icon size="small" icon={<Icons.Status.WeatherClear />} />
                  </Mie.L.View>
                }
              />
            }
          />
        </Mie.L.View>
      </Mie.L.Window>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React component
`.trim()

export default Object.assign(Accent, {
  title: "Accent",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})