import * as Mie from "mielo-react"
import { ComponentGroup } from "../components"

const ITEM_TYPESCRIPT = `

`.trim()

const ITEM_HTML = `

`.trim()

export function ItemPage() {
  return (
    <div className="page item">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Item"
            subtitle="Abstract layout component"
            size="large"
            center
          />
        }
      >
        <ComponentGroup
          title="Item"
          code={{
            jsx: ITEM_TYPESCRIPT,
            html: ITEM_HTML,
          }}
        >
          <Mie.View
            className="sample"
            justifyContent="center"
            column
            flex1
            flex
          >
            <Mie.Item title="Item Title" description="Description line" />
            <Mie.Item
              icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
              title="Item Title"
            />
            <Mie.Item
              icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
              title="Vertical Item Title"
              description="Description message"
              vertical
              center
            />
            <Mie.Item
              icon={<Mie.Icon icon={<Mie.Icons.FolderNew />} />}
              description="Some description text"
              title="Item Title"
              side={
                <Mie.Button
                  icon={<Mie.Icons.UserTrash />}
                  accent="error"
                  size="small"
                  circular
                />
              }
            />
          </Mie.View>
        </ComponentGroup>
      </Mie.Clamp>
    </div>
  )
}