import { Slider, RangeSlider } from "@mielo-ui/mielo-react-slider"
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

export function Sliders() {
  const [first, setFirst] = useState(50)
  const [second, setSecond] = useState(50)
  const [third, setThird] = useState(50)
  const [fourth, setFourth] = useState(50)
  const [fifth, setFifth] = useState(50)

  const [firstRange, setFirstRange] = useState({
    max: 20,
    min: 80,
  })

  const [secondRange, setSecondRange] = useState({
    max: 20,
    min: 80,
  })

  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Slider">
      <Mie.L.Header title="Slider" size="small" mb="small" />

      <Mie.L.View
        className="card"
        gr="large"
        bg="content"
        r="large"
        shadow
        fc
        p
        f
      >
        <Mie.L.View f fr>
          <Mie.L.View fai="center" fjc="center" gr="big" f1 fc f>
            <Slider
              onChange={nextValue => setFirst(nextValue)}
              style={{ width: "100%" }}
              value={first}
              max={100}
              min={0}
            />

            <RangeSlider
              onChange={nextValue => setFirstRange(nextValue)}
              style={{ width: "100%" }}
              value={firstRange}
              step={1}
              max={100}
              min={0}
            />
          </Mie.L.View>

          <Mie.L.View gc="massive" fai="center" fjc="center" f1 fr f>
            <Slider
              onChange={nextValue => setSecond(nextValue)}
              style={{ height: "100%" }}
              orientation="vertical"
              value={second}
              max={100}
              min={0}
            />

            <RangeSlider
              onChange={nextValue => setSecondRange(nextValue)}
              style={{ height: "100%" }}
              orientation="vertical"
              value={secondRange}
              step={1}
              max={100}
              min={0}
            />
          </Mie.L.View>
        </Mie.L.View>

        <Mie.L.View fai="center" fjc="center" gr="big" f1 fc f>
          <Slider
            onChange={nextValue => setThird(nextValue)}
            style={{ width: "100%" }}
            accent="warning"
            value={third}
            max={100}
            min={0}
          />

          <Slider
            onChange={nextValue => setFourth(nextValue)}
            style={{ width: "100%" }}
            accent="error"
            value={fourth}
            max={100}
            min={0}
          />

          <Slider
            onChange={nextValue => setFifth(nextValue)}
            style={{ width: "100%" }}
            accent="success"
            value={fifth}
            max={100}
            min={0}
          />
        </Mie.L.View>
      </Mie.L.View>
    </Mie.L.View>
  )
} 