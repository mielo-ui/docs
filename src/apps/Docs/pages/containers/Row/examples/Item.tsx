import { tsFormatSample } from "../../../../utils"
import rawTsCode from "./Item.tsx?raw"

//@chunk
import { useState } from "react"

import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

function Item() {
  const [username, setUsername] = useState("")

  const [time, setTime] = useState<Mie.OptionValue>({
    title: "Day",
    value: "day",
  })

  const options = [
    {
      description: "Description text",
      title: "Title 1",
      value: "one",
    },
    {
      description: "Description text",
      title: "Title 2",
      value: "two",
    },
    {
      description: "Description text",
      title: "Title 3",
      value: "three",
    },
  ]

  return (
    <Mie.L.View f fc f1 pt="massive">
      <Mie.L.Rows r shadow>
        <Mie.L.Rows.Entry
          onChange={event => setUsername(event.target.value)}
          placeholder="Enter Username"
          label="Username"
          value={username}
          name="username"
          type="text"
          rt
        />
        
        <Mie.L.Rows.Select
          onChange={option => setTime(option)}
          label="Select Title"
          options={options}
          value={time}
          name="time"
          menuHeight="14.5rem"
          r="none"
        />

        <Mie.L.Rows.Row title="Title" activatable />

        <Mie.L.Rows.Row
          icon={<Mie.L.Icon mr="small" icon={<Icons.Actions.FolderNew />} />}
          title="Title"
          activatable
        />

        <Mie.L.Rows.Row
          description="Lorem ipsum description"
          title="Title"
          activatable
        />

        <Mie.L.Rows.Row
          icon={<Mie.L.Icon mr="small" icon={<Icons.Actions.FolderNew />} />}
          description="Lorem ipsum description"
          title="Title"
          activatable
        />

        <Mie.L.Rows.Row
          description="Lorem ipsum description"
          title="Title"
          activatable
          side={
            <>
              <Mie.Button
                size="tiny"
                accent
                label={
                  <Mie.Text size="small" accent>
                    Icon Folder
                  </Mie.Text>
                }
                icon={
                  <Mie.L.Icon
                    icon={<Icons.Actions.FolderNew />}
                    size="small"
                    mr="tiny"
                    accent
                  />
                }
              />
            </>
          }
        />

        <Mie.L.Rows.Row
          description="Lorem ipsum description"
          title="Title"
          activatable
          icon={
            <Mie.L.Icon
              mr="small"
              icon={<Icons.Actions.FolderNew />}
              circular
              filled
            />
          }
          side={
            <>
              <Mie.L.Button
                accent="error"
                size="small"
                r="large"
                filled
                icon={
                  <Mie.L.Icon
                    icon={<Icons.Places.UserTrash />}
                    color="light"
                    size="small"
                  />
                }
              />
            </>
          }
          rb
        />
      </Mie.L.Rows>
    </Mie.L.View>
  )
}

//@chunk
const rawHtmlCode = `
<div class="mie rows">
  <div class="mie item row property">
    <div class="content">
      <div class="title">Title</div>
    </div>
  </div>

  <div class="mie item row property">
    <div class="indicator">
      <div class="mie icon">
        <svg />
      </div>
    </div>

    <div class="content">
      <div class="title">Title</div>
    </div>
  </div>

  <div class="mie item row property">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>

  <div class="mie item row property">
    <div class="indicator">
      <div class="mie icon">
        <svg />
      </div>
    </div>
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>

  <div class="mie item row property">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>

    <div class="side">
      <button class="mie button content icon accent small">
        <div class="icon">
          <div class="mie icon">
            <svg />
          </div>
        </div>

        Label
      </button>
    </div>
  </div>

  <div class="mie item row property">
    <div class="indicator">
      <div class="mie icon circular filled">
        <svg />
      </div>
    </div>

    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
    
    <div class="side">
      <button class="mie button icon filled error small">
        <div class="icon">
          <div class="mie icon">
            <svg />
          </div>
        </div>
      </button>
    </div>
  </div>
</div>
`.trim()

export default Object.assign(Item, {
  title: "Item",
  code: {
    ts: tsFormatSample(rawTsCode),
    html: rawHtmlCode,
  },
})