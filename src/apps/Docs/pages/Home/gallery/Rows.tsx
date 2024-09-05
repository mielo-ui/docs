import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"
import { useState } from "react"

export function Rows() {
  const [text, setText] = useState("")

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
    <Mie.L.View f fc className="gallery-sample" data-title="Rows">
      <Mie.L.Header title="Rows" size="small" mb="small" />

      <Mie.L.Rows r shadow>
        <Mie.L.Rows.Row title="Title" activatable rt />

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

        <Mie.L.Rows.Entry
          onChange={event => setText(event.target.value)}
          placeholder="Enter text value"
          label="Text Input"
          value={text}
          name="text"
          type="text"
        />

        <Mie.L.Rows.Row
          icon={<Mie.L.Icon mr="small" icon={<Icons.Actions.FolderNew />} />}
          description="Lorem ipsum description"
          title="Title"
          activatable
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