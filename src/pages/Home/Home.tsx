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
        bg="panel"
        fc
        rt
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
        mb="big"
        center
      />

      <Mie.L.View f fr fw className="gallery">
        <Gallery.Typography />
        <Gallery.Checkbox />
        <Gallery.Button />

        <Mie.L.View f fc sbv data-title="Label+Icon">
          <Gallery.Label />
          <Gallery.Icon />
        </Mie.L.View>

        <Mie.L.View f fc sbv data-title="Image+Select">
          <Gallery.Image />
          <Gallery.Select />
        </Mie.L.View>

        <Gallery.Entry />
        <Gallery.Message />

        <Gallery.Progress />
        <Gallery.Sliders />

        <Gallery.Tabs />
        <Gallery.Collapsible />

        <Gallery.List />

        <Gallery.Window />
        <Gallery.Activatable />
        <Gallery.Dialog />
        <Gallery.View />
      </Mie.L.View>
    </div>
  )
}