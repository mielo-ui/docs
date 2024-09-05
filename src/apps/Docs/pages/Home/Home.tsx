import * as Mie from "@mielo-ui/mielo-react"
import { Code } from "../../components/Code"
import * as Gallery from "./gallery"

import sampleWindowCode from "./SampleWindow.tsx?raw"
import { SampleWindow } from "./SampleWindow"

const INSTALL = `
yarn add @mielo-ui/mielo @mielo-ui/mielo-react
# OR
npm install @mielo-ui/mielo @mielo-ui/mielo-react --save-dev
`.trim()

export function HomePage() {
  return (
    <Mie.L.View className="page home" f fc>
      <Mie.L.View
        className="page-heading"
        shadow="outer"
        fai="center"
        fjc="center"
        bg="panel"
        fc
        f
      >
        <Mie.Header
          subtitle="Framework inspired by LibAdwaita"
          title="Mielo UI"
          size="huge"
          center
        />

        <Mie.L.View
          className="header-sample"
          fai="stretch"
          fjc="center"
          gr="massive"
          f1
          fc
          f
        >
          <SampleWindow />

          <Mie.L.View f fc className="code-stack">
            <Code lang="bash" code={INSTALL} />
            <Code lang="tsx" code={sampleWindowCode} />
          </Mie.L.View>

          <Mie.L.View
            className="feature-cards"
            fai="stretch"
            gc="large"
            gr="large"
            fw
            f1
            f
          >
            {[
              {
                title: "25",
                description: "Elements",
                bg: "lightgreen",
              },
              {
                title: "6-25kb",
                description: "Css Bundle (gzip)",
                bg: "pink",
              },
              {
                title: "22kb",
                description: "React Lib (gzip)",
                bg: "orange",
              },
              {
                title: "Layout",
                description: "Sizing & positions",
                bg: "deeppurple",
              },
              {
                title: "Theming",
                description: "Simple style setup",
                bg: "yellow",
              },
            ].map(({ title, description, bg }, idx) => (
              <Mie.L.View
                className="feature-card"
                key={`${bg}-${idx}`}
                color={bg}
                bordered
                p="large"
                r="large"
                shadow
                fc
                f1
                f
              >
                <Mie.L.Text size="huge" fbold>
                  {title}
                </Mie.L.Text>
                <Mie.L.Text mt="small">{description}</Mie.L.Text>
              </Mie.L.View>
            ))}
          </Mie.L.View>
        </Mie.L.View>
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

        <Mie.L.View f fc gr="massive" data-group="Button+Label">
          <Gallery.Button />
          <Gallery.Label />
        </Mie.L.View>

        <Gallery.Icon />

        <Mie.L.View f fc gr="massive" data-group="Image+Select">
          <Gallery.Image />
          <Gallery.Select />
        </Mie.L.View>

        <Gallery.Entry />
        <Gallery.Message />

        <Gallery.Progress />
        <Gallery.Sliders />

        <Gallery.List />

        <Mie.L.View f fc gr="massive" data-group="Tabs+Dialog+Window">
          <Gallery.Tabs />
          <Gallery.Dialog />
          <Gallery.Window />
        </Mie.L.View>

        <Mie.L.View f fc gr="massive" data-group="Collapsible+Activatable+View">
          <Gallery.Collapsible />
          <Gallery.Activatable />
          <Gallery.View />
        </Mie.L.View>
      </Mie.L.View>
    </Mie.L.View>
  )
}