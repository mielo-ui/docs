import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Rounded.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Rounded() {
  return (
    <Mie.View>
      <Mie.L.Icon
        icon={<Mie.Icons.DialogInformation />}
        size="big"
        accent
        bg
        r="tiny"
        p="large"
        m
      />

      <Mie.L.Icon
        icon={<Mie.Icons.DialogWarning />}
        accent="warning"
        size="huge"
        bg
        r="small"
        p="large"
        m
      />

      <Mie.L.Icon
        icon={<Mie.Icons.DialogError />}
        accent="error"
        size="big"
        bg
        r={true}
        p="large"
        m
      />

      <Mie.L.Icon
        icon={<Mie.Icons.EmblemOk />}
        accent="success"
        size="big"
        bg
        r="large"
        p="large"
        m
      />
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie icon big accent bg p-large m r-tiny">
  <svg />
</div>

<div class="mie icon huge warning bg p-large m r-small">
  <svg />
</div>

<div class="mie icon big error bg p-large m r">
  <svg />
</div>

<div class="mie icon big success bg p-large m r-large">
  <svg />
</div>
`.trim()

export default Object.assign(Rounded, {
  title: "Rounded",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})