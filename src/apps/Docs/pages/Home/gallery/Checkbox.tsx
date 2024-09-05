import * as Icons from "@mielo-ui/adwaita-symbolic-icons-react"
import * as Mie from "@mielo-ui/mielo-react"

export function Checkbox() {
  return (
    <Mie.L.View f fc className="gallery-sample" data-title="Checkbox">
      <Mie.L.Header title="Checkbox & Radio" size="small" mb="small" />

      <Mie.L.View className="card" bg="content" r="large" p="large" shadow fc f>
        <Mie.L.View f fc sbv>
          <Mie.Checkbox name="checkbox" label="Default" />

          <Mie.Checkbox name="checkbox-checked" label="Checked" checked />

          <Mie.Checkbox
            name="checkbox-success-checked"
            label="Accent Success"
            accent="success"
            checked
          />

          <Mie.Checkbox
            name="checkbox-circular-checked"
            label="Circular + Accent Error"
            accent="error"
            circular
            checked
          />
        </Mie.L.View>

        <Mie.L.Header mt="large" mb="small" title="Toggles" size="tiny" />
        <Mie.L.Divider mb="large" />

        <Mie.L.View f fc sbv>
          <Mie.Checkbox toggle name="toggle" label="Toggle" />

          <Mie.Checkbox
            name="toggle-checked"
            label="Toggle Checked"
            checked
            toggle
          />

          <Mie.Checkbox
            name="toggle-accent-warning-checked"
            label="Accent Warning"
            accent="warning"
            checked
            toggle
          />

          <Mie.Checkbox
            name="toggle-accent-error-checked"
            label="Accent Error"
            accent="error"
            checked
            toggle
          />

          <Mie.Checkbox
            name="toggle-accent-success-checked"
            label="Accent Error"
            accent="success"
            checked
            toggle
          />
        </Mie.L.View>

        <Mie.L.Header mt="large" mb="small" title="Radio" size="tiny" />
        <Mie.L.Divider mb="large" />

        <Mie.L.View f fc sbv>
          <Mie.Radio
            children="First Option"
            name="radio-default"
            value="radio-1"
            id="radio-1"
            defaultChecked
          />

          <Mie.Radio
            children="Last Option"
            name="radio-default"
            value="radio-2"
            id="radio-2"
          />
        </Mie.L.View>
      </Mie.L.View>
    </Mie.L.View>
  )
} 