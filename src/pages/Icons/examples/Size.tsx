import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Size() {
  return (
    <Mie.View>
      <Mie.Icon icon={<Mie.Icons.UserHome />} size="mini" />
      <Mie.Icon icon={<Mie.Icons.UserHome />} size="tiny" />
      <Mie.Icon icon={<Mie.Icons.UserHome />} size="small" />
      <Mie.Icon icon={<Mie.Icons.UserHome />} />
      <Mie.Icon icon={<Mie.Icons.UserHome />} size="large" />
      <Mie.Icon icon={<Mie.Icons.UserHome />} size="big" />
      <Mie.Icon icon={<Mie.Icons.UserHome />} size="huge" />
      <Mie.Icon icon={<Mie.Icons.UserHome />} size="massive" />
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie icon mini">
  <svg>
</div>

<div class="mie icon tiny">
  <svg>
</div>

<div class="mie icon small">
  <svg>
</div>

<div class="mie icon">
  <svg>
</div>

<div class="mie icon large">
  <svg>
</div>

<div class="mie icon big">
  <svg>
</div>

<div class="mie icon huge">
  <svg>
</div>

<div class="mie icon massive">
  <svg>
</div>
`.trim()

export default Object.assign(Size, {
  title: "Size",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})