import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Default.tsx?raw"

import rawPropsCode from "../../../../../node_modules/@mielo-ui/mielo-react/src/containers/Dialog/Props.ts?raw"

//@chunk
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

function Default() {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <>
      <Mie.Dialog
        onRequestClose={() => setModalOpened(false)}
        style={{ maxWidth: "40rem" }}
        isOpen={modalOpened}
        attached="modal"
        actions={
          <>
            <Mie.L.Button
              onClick={() => setModalOpened(false)}
              label="Cancel"
              transparent
              tertiary
              pv="small"
            />
            <Mie.L.Button
              onClick={() => setModalOpened(false)}
              label="Discard"
              accent="error"
              transparent
              tertiary
              pv="small"
            />
            <Mie.L.Button
              onClick={() => setModalOpened(false)}
              label="Save"
              transparent
              tertiary
              accent
              pv="small"
            />
          </>
        }
      >
        <Mie.L.Header
          title="Save Changes?"
          subtitle={
            <Mie.L.Text mt="small">
              Open document contains unsaved changes. <br />
              Changes which are not saved will be permanently lost.
            </Mie.L.Text>
          }
          size="large"
          mt="large"
          mh="large"
          center
        />
      </Mie.Dialog>

      <Mie.L.Button
        onClick={() => {
          setModalOpened(true)
        }}
        label="Open Dialog"
        accent="success"
        size="large"
        ph="massive"
        pilled
        filled
      />
    </>
  )
}

//@chunk
const rawHtmlCode = `
// Without HTML
// Only React Component
`.trim()

export default Object.assign(Default, {
  title: "Default",
  code: {
    ts: tsFormatSample(rawTsCode),
    props: rawPropsCode,
    html: rawHtmlCode,
  },
})