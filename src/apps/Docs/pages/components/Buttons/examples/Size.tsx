import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

function Size() {
  return (
    <Mie.L.View f fc gr="large" fjc="center" fai="center" pt="massive">
      <Mie.L.View f fr gc="small" fai="center">
        <Mie.Button label="Tiny" size="tiny" />
        <Mie.Button label="Small" size="small" />
        <Mie.Button label="Medium Default" />
      </Mie.L.View>
      <Mie.L.View f fr gc="small" fai="center">
        <Mie.Button label="Large" size="large" />
        <Mie.Button label="Big" size="big" />
        <Mie.Button label="Huge" size="huge" />
      </Mie.L.View>
      <Mie.Button label="Massive" size="massive" />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<button class="mie button tiny">Tiny</button>
<button class="mie button small">Small</button>
<button class="mie button">Medium Default</button>
<button class="mie button large">Large</button>
<button class="mie button big">Big</button>
<button class="mie button huge">Huge</button>
<button class="mie button massive">Massive</button>

`.trim()

export default Object.assign(Size, {
  title: "Size",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})