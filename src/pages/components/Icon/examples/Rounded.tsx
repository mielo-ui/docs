import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Rounded.tsx?raw"

//@chunk
import * as Icons from "adwaita-symbolic-icons-react"
import * as Mie from "mielo-react"

function Rounded() {
  return (
    <Mie.L.View f fr sbh="large" fai="center">
      <Mie.L.Icon
        icon={<Icons.Status.DialogInformation />}
        size="big"
        p="large"
        accent
        bg
        
        r="tiny"
      />

      <Mie.L.Icon
        icon={<Icons.Status.DialogWarning />}
        accent="warning"
        size="huge"
        p="large"
        bg

        r="small"
      />

      <Mie.L.Icon
        icon={<Icons.Status.DialogError />}
        accent="error"
        size="big"
        p="large"
        bg
        
        r
      />

      <Mie.L.Icon
        icon={<Mie.Icons.EmblemOk />}
        accent="success"
        size="big"
        p="large"
        bg
        
        r="large"
      />
    </Mie.L.View>
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