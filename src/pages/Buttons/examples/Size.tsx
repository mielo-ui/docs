import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Size() {
  return (
    <Mie.View>
      <Mie.Button label="Small" size="small" />
      <Mie.Button label="Medium Default" />
      <Mie.Button label="Large" size="large" />
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
  <button class="mie button small">
    Small
  </button>

  <button class="mie button">
    Medium Default
  </button>

  <button class="mie button large">
    Large
  </button>
`.trim()

export default Object.assign(Size, {
  title: "Size",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})