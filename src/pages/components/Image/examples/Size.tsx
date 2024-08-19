import whiteframe from "../../../../images/whiteframe.png"
import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"

// 1 REM = 10px
// $mie-image-size: (
//   "mini": 3.4rem,
//   "tiny": 8rem,
//   "small": 15rem,
//   "medium": 30rem,
//   "large": 45rem,
//   "big": 60rem,
//   "huge": 80rem,
//   "massive": 96rem,
// );

function Size() {
  return (
    <Mie.L.View f fr gc="large" fai="center" pv="large">
      <Mie.L.Image r size="mini" src={whiteframe} />
      <Mie.L.Image r size="tiny" src={whiteframe} />
      <Mie.L.Image r size="small" src={whiteframe} />
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `

`.trim()

export default Object.assign(Size, {
  title: "Size",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})