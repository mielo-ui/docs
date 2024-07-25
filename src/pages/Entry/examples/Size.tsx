import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Size.tsx?raw"

//@chunk
import * as Mie from "mielo-react"

function Size() {
  return (
    <Mie.View>
      <Mie.Entry
        placeholder="Field name"
        value="Small entry size"
        name="username-s-1"
        size="small"
        type="text"
        message="Small entry message"
        accent="error"
      />

      <Mie.Entry
        placeholder="Field name"
        value="Defailt entry size"
        name="username-s-2"
        type="text"
        message="Default medium entry message"
        accent="warning"
      />

      <Mie.Entry
        placeholder="Field name"
        value="Large entry size"
        name="username-s-3"
        size="large"
        type="text"
        message="Large entry message"
        accent="success"
      />
    </Mie.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie checkbox small warning">
  <input class="input" id="accents_checkbox-default-1" type="checkbox" />
  
  <label class="label" for="accents_checkbox-default-1">
    <div class="indicator">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Small</div>
  </label>
</div>

<div class="mie checkbox success">
  <input
    id="accents_checkbox-default-2"
    type="checkbox"
    class="input"
    checked=""
  />

  <label class="label" for="accents_checkbox-default-2">
    <div class="indicator checked">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Medium</div>
  </label>
</div>

<div class="mie checkbox large error">
  <input
    id="accents_checkbox-default-2"
    type="checkbox"
    class="input"
    checked=""
  />

  <label class="label" for="accents_checkbox-default-3">
    <div class="indicator checked">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Large</div>
  </label>
</div>
`.trim()

export default Object.assign(Size, {
  title: "Size",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})