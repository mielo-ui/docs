import * as Mie from "@mielo-ui/mielo-react"
import { Code } from "../../components/Code"

const CSS_FIRST = `
<!-- if size is empty - used default medium value -->
<!-- p(adding)-large m(argin)v(ertical) -->

<div class="mie p-large mv" />
`

export function AbstractPage() {
  return (
    <div className="page toggle">
      <Mie.Clamp
        header={
          <Mie.Header title="Layout" subtitle="Abstract" size="large" center />
        }
      >
        <Mie.View>
          <Mie.L.Text mb="massive" size="large">
            The main concept is to make a set of generalized helper methods for
            different tasks. You can perceive it as shortcuts, similar to those
            you could see in tailwind css. Also, arbitrary descriptive
            gradations are used as a unit of measurement of sizes, like "large"
            or "small". Such a convention is much easier to remember and adjust
            to your project, or using a standard one.
          </Mie.L.Text>

          <Mie.Message
            description="At the moment, the default values ​​of indents, etc. are not complete. Therefore, customize them for yourself separately!"
            title="Disclaimer"
            accent="warning"
            size="large"
          />

          <Mie.L.Text mt="massive" mb="big" size="large">
            Helper classes are global, and are shortened names from css methods
            or purposes.
          </Mie.L.Text>

          <Code lang="css" code={CSS_FIRST} />

          <Mie.L.Text mt="big" size="large">
            For the rest, read the detailed sections of each module.
          </Mie.L.Text>
        </Mie.View>
      </Mie.Clamp>
    </div>
  )
}