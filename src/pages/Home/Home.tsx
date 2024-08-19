import * as Mie from "@mielo-ui/mielo-react"
import { Code } from "../../components/Code"
import * as Gallery from "./gallery"

const INSTALL = `
yarn add @mielo-ui/mielo @mielo-ui/mielo-react
# OR
npm install @mielo-ui/mielo @mielo-ui/mielo-react --save-dev
`.trim()

export function HomePage() {
  return (
    <div className="page home">
      <Mie.L.View
        className="page-heading"
        shadow="outer"
        fjc="center"
        fai="center"
        rtr="large"
        bg="panel"
        fc
        f
      >
        <Mie.Header
          subtitle="Frameword inspired by LibAdwaita"
          title="Mielo UI"
          size="large"
          center
        />

        <Code lang="bash" code={INSTALL} />
      </Mie.L.View>

      <Mie.L.Header
        subtitle="Expo of all components, with little bit variations"
        title="Gallery"
        size="large"
        mt="massive"
        mb="massive"
        center
      />

      <Mie.L.View f fr fw className="gallery">
        <Gallery.Typography />
        <Gallery.Checkbox />

        <Mie.L.View f fc gr="massive" data-group>
          <Gallery.Button />
          <Gallery.Label />
        </Mie.L.View>

        <Gallery.Icon />

        <Mie.L.View f fc gr="massive" data-group>
          <Gallery.Image />
          <Gallery.Select />
        </Mie.L.View>

        <Gallery.Entry />
        <Gallery.Message />

        <Gallery.Progress />
        <Gallery.Sliders />

        <Gallery.List />

        <Mie.L.View f fc gr="massive" data-group>
          <Gallery.Tabs />
          <Gallery.Dialog />
          <Gallery.Window />
        </Mie.L.View>

        <Mie.L.View f fc gr="massive" data-group>
          <Gallery.Collapsible />
          <Gallery.Activatable />
          <Gallery.View />
        </Mie.L.View>
      </Mie.L.View>
    </div>
  )
}