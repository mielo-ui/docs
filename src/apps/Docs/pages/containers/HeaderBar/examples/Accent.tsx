import { useState } from "react"
import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Accent.tsx?raw"

//@chunk
import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useMediaQuery } from "usehooks-ts"

function Accent() {
  const [accent, setAccent] = useState<Mie.OptionValue | undefined>()
  const [isAccentWindow, setIsAccentWindow] = useState(false)
  const [isTransparent, setIsTransparent] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

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
          header: !isMobile && (
            <Mie.Header size="tiny" title="Default Title" center />
          ),
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
          gr="large"
          m={isMobile ? "small" : "massive"}
          p={isMobile ? "tiny" : "large"}
          r="large"
          shadow
          fc
          f
        >
          <Mie.L.Item
            description="Make HeaderBar transparentize"
            disableSidePropagation
            title="Transparent"
            side={
              <Mie.Checkbox
                onChange={event => {
                  console.log(event, event.target.checked)
                  setIsTransparent(event.target.checked)
                }}
                checked={isTransparent}
                name="is-transparent"
                accent="success"
                toggle
              />
            }
          />

          <Mie.L.Item
            description="Also change window background accent"
            disableSidePropagation
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

          <Mie.L.Item
            description="Make HeaderBar transparentize"
            disableSidePropagation
            title="Transparent"
            side={
              <Mie.Select
                onChange={option => setAccent(option)}
                options={accentsOptions}
                transparent
                bordered
                label="Accent"
                size="small"
                menuHeight="8rem"
                value={accent}
                name="accent"
                prefix={
                  <Mie.L.View pl f fai="center" fjc="center">
                    <Mie.Icon
                      size="small"
                      icon={<Icons.Status.WeatherClear />}
                    />
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