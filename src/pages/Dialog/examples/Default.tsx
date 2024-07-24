import { tsFormatSample } from "../../../utils"
import rawTsCode from "./Default.tsx?raw"

//@chunk
import * as Mie from "mielo-react"
import { useState } from "react"

function Default() {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <>
      <Mie.Dialog
        onRequestClose={() => setModalOpened(false)}
        isOpen={modalOpened}
        attached="modal"
        theme="dark"
        actions={
          <>
            <Mie.Dialog.Action
              onClick={() => setModalOpened(false)}
              label="Cancel"
            />
            <Mie.Dialog.Action
              onClick={() => setModalOpened(false)}
              label="Discard"
              accent="error"
            />
            <Mie.Dialog.Action
              onClick={() => setModalOpened(false)}
              label="Save"
              accent
            />
          </>
        }
      >
        <Mie.Header
          title="Save Changes?"
          subtitle="Open document contains unsaved changes. Changes which are not saved will be permanently lost."
          center
        />
      </Mie.Dialog>

      <Mie.L.Button
        onClick={() => {
          setModalOpened(true)
        }}
        label="Open Dialog"
        size="large"
        ph="massive"
        filled
        pilled
        accent
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
    html: rawHtmlCode,
  },
})