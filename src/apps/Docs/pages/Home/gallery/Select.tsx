import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

export function Select() {
  const [time, setTime] = useState<Mie.OptionValue>()

  const [secondTime, setSecondTime] = useState<Mie.OptionValue>({
    title: "Day",
    value: "day",
  })

  const [thirdTime, setThirdTime] = useState<Mie.OptionValue>({
    title: "Morning",
    value: "morning",
  })

  const timeIcon = {
    day: <Icons.Status.WeatherClear />,
    night: <Icons.Status.WeatherClearNight />,
    morning: <Icons.Status.WeatherFewCloudsNight />,
  }

  const times = [
    {
      title: "Morning",
      value: "morning",
    },
    {
      title: "Day",
      value: "day",
    },
    {
      title: "Night",
      value: "night",
    },
  ]

  const accents = {
    morning: "success",
    day: "warning",
    night: true,
  }

  const timesCustom = times.map(defaultTime => ({
    accent: accents[defaultTime.value],
    ...defaultTime,

    icon: (
      <Mie.L.Icon
        accent={accents[defaultTime.value]}
        icon={timeIcon[defaultTime.value]}
        mr="small"
      />
    ),
  }))

  const timesExtraCustom: any = times.map((defaultTime, timeIdx) =>
    Object.assign(
      {
        description: "Some text...",
        accent: accents[defaultTime.value],
        ...defaultTime,
        mh: "none",
        p: "tiny",
        r: null as any,

        icon: (
          <Mie.L.Icon
            accent={accents[defaultTime.value]}
            icon={timeIcon[defaultTime.value]}
            mr="tiny"
            pv="mini"
            pr="tiny"
            pl="mini"
          />
        ),
      },
      times.length - 1 === timeIdx && { rb: true },
      timeIdx === 0 && { rt: true },
    ),
  )

  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Select">
      <Mie.L.Header title="Select" size="small" mb="small" />

      <Mie.L.View
        className="card"
        gr="big"
        fjc="center"
        fai="center"
        bg="panel"
        r="large"
        p="large"
        shadow
        fc
        f
      >
        <div
          className="mie f fc sbv-large pb-massive"
          style={{ width: "100%" }}
        >
          <Mie.Select
            onChange={option => setTime(option)}
            options={times}
            label="Time"
            value={time}
            name="time"
          />

          <Mie.Select
            onChange={option => setSecondTime(option)}
            options={timesCustom}
            label="Time"
            value={secondTime}
            name="time-second"
            prefix={
              <Mie.L.View pl f fai="center" fjc="center">
                <Mie.Icon icon={timeIcon[secondTime.value]} />
              </Mie.L.View>
            }
          />

          <Mie.Select
            onChange={option => setThirdTime(option)}
            accent={accents[thirdTime.value]}
            options={timesExtraCustom}
            value={thirdTime}
            name="time-third"
            label="Time"
            menuHeight="16.2rem"
            listProps={{
              gr: "none",
              pv: "none",
            }}
            prefix={
              <Mie.L.View ml="small" f fai="center" fjc="center">
                <Mie.L.Icon
                  accent={accents[thirdTime.value]}
                  icon={timeIcon[thirdTime.value]}
                  r="large"
                  p="tiny"
                  bg
                />
              </Mie.L.View>
            }
          />
        </div>
      </Mie.L.View>
    </Mie.L.View>
  )
} 