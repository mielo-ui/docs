import { Slider, RangeSlider } from "@mielo-ui/mielo-react-slider"
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

export function Sliders() {
  const [value, setValue] = useState(50)

  const [range, setRange] = useState({
    max: 20,
    min: 80,
  })

  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Slider">
      <Mie.L.Header title="Slider" size="small" mb="small" />

      <Mie.L.View
        className="card"
        sbv="large"
        bg="panel"
        r="large"
        shadow
        fc
        p
        f
      >
        <Mie.L.View f fr>
          <Mie.L.View fai="center" fjc="center" sbv="small" f1 fc f>
            <Slider
              onChange={nextValue => setValue(nextValue)}
              style={{ width: "100%" }}
              value={value}
              max={100}
              min={0}
            />

            <RangeSlider
              onChange={nextValue => setRange(nextValue)}
              style={{ width: "100%" }}
              value={range}
              step={1}
              max={100}
              min={0}
            />
          </Mie.L.View>

          <Mie.L.View sbh="massive" fai="center" fjc="center" f1 fr f>
            <Slider
              onChange={nextValue => setValue(nextValue)}
              style={{ height: "100%" }}
              orientation="vertical"
              value={value}
              max={100}
              min={0}
            />

            <RangeSlider
              onChange={nextValue => setRange(nextValue)}
              style={{ height: "100%" }}
              orientation="vertical"
              value={range}
              step={1}
              max={100}
              min={0}
            />
          </Mie.L.View>
        </Mie.L.View>
        <Mie.L.View fai="center" fjc="center" sbv="small" f1 fc f>
          <Slider
            onChange={nextValue => setValue(nextValue)}
            style={{ width: "100%" }}
            accent="warning"
            value={value}
            max={100}
            min={0}
          />

          <Slider
            onChange={nextValue => setValue(nextValue)}
            style={{ width: "100%" }}
            accent="error"
            value={value}
            max={100}
            min={0}
          />

          <Slider
            onChange={nextValue => setValue(nextValue)}
            style={{ width: "100%" }}
            accent="success"
            value={value}
            max={100}
            min={0}
          />
        </Mie.L.View>
      </Mie.L.View>
    </Mie.L.View>
  )
} 