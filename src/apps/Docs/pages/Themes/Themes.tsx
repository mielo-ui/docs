import { MouseEventHandler, useCallback } from "react"
import * as Mie from "@mielo-ui/mielo-react"

import { isDesktop, openExternalLink } from "../../../../desktop"
import { Code } from "../../components/Code"

const BOILERPLATE_LINK = "https://github.com/mielo-ui/mielo-theme-boilerplate/tree/main"

const CSS_PRESUDOCODE_SAMPLE = `
/* Default appearance variables for component */
[data-theme=$theme] .mie.$component,
.mie.$component[data-theme=$theme] {
  --mie-$component-$prop: rgba(0, 0, 0, 0.1);
}
/* Appearance variables with extended status flag for component */
[data-theme=$theme] .mie.$component.$extra_flag,
.mie.$component.$extra_flag[data-theme=$theme] {
  --mie-$component-$prop: rgb($extra_flag_color);
}
/* Default variant variables for component */
.mie.$component {
  --mie-$component-$prop: 1rem;
}
/* Component body where we used declared variables */
.mie.$component {
  background: var(--mie-$component-$prop);
  height: var(--mie-$component-$prop);
}
`.trim()

const CSS_EXAMPLE_HTML = `
/* A basic component, with basic color and state variables */
<div class="mie $component" />

/* We add additional color flag options to the component */
<div class="mie $component $accent_flat" />

<div class="mie label accent" />
<div class="mie label success" />
<div class="mie label orange" />

/* The declaration of additional flags for basic parameters also looks like this */
<div class="mie $component $variant_flag" />
<div class="mie label big" />
`.trim()

const SCSS_EXAMPLE_HEADING = `
/* A basic component, with basic color and state variables */
:root, [data-theme=light] .mie.label, .mie.label[data-theme=light] {
  --mie-label-border-bg: rgba(0, 0, 0, 0.1);
  --mie-label-fg: rgba(0, 0, 0, 0.82);
  --mie-label-bg: #c0bfbc;
}

/* We add additional color flag options to the component */
:root, [data-theme=light] .mie.label.accent, .mie.label.accent[data-theme=light] {
  --mie-label-fg: #d2e4f9;
  --mie-label-border-bg: #1f76e1;
  --mie-label-bg: #3584e4;
}

/* ...Here the declaration of the dark theme is also made, but we will skip it */
/* We declare default variables along with other variables in the component */
.mie.label {
  --mie-label-pv: 0.8rem;
  --mie-label-ph: 0.8rem;
  --mie-label-fs: 1.2rem;
  --mie-label-rounded: 0.6rem;
  --mie-label-border-w: 0.1rem;
}

/* We declare variables for one of the options, here specifically the size */
.mie.label.large {
  --mie-label-pv: 1.2rem;
  --mie-label-ph: 1.2rem;
  --mie-label-fs: 1.4rem;
}

/* ...Here the declaration of different sizes is also made, but we will skip it */
/* Объявляем тело компонента */
.mie.label {
  padding: var(--mie-label-pv) var(--mie-label-ph);
  border-radius: var(--mie-label-rounded);
  background-color: var(--mie-label-bg);
  font-size: var(--mie-label-fs);
  color: var(--mie-label-fg);
  transition: all 0.3s ease;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  font-weight: 700;
}
`.trim()

const BUNDLER_SCSS = `
/*! mielo v1.0.2 | MIT License | github.com/mielo-ui/mielo */
@charset "utf-8";

// Initial base mielo css context with all builders
@use "@mielo-ui/mielo/sass/variables" as *;

// Declare variants setup (its like variants, sizes, etc...)
@use "variants";

// Declare appearance setup (its like accents colors, addittional 
// colors, and components colors for dark, light pairs.
@use "theme";

// Import default static layout helpers
@import "@mielo-ui/mielo/sass/layout";

// Imoport another base components & containers
@import "@mielo-ui/mielo/sass/typography";
@import "@mielo-ui/mielo/sass/containers";
@import "@mielo-ui/mielo/sass/components";
`.trim()

const SETUP_VARIANTS_SCSS = `
@use "@mielo-ui/mielo/sass/variables" as *;

// Variants
@include setup-variants(
  (
    // Example setup sizes for item, variable helpers 
    // like text-fs already imported from mielo context
    "item": (
      "sizes": (
        "medium": (
          "description-fs": text-fs(small),
          "title-fs": text-fs(medium)
        ),
        "small": (
          "description-fs": text-fs(mini),
          "title-fs": text-fs(small)
        ),
        "large": (
          "description-fs": text-fs(medium),
          "title-fs": text-fs(large)
        )
      )
    )
  )
);
`.trim()

const CUSTOM_PALETTE_SCSS = `
/*! mielo v1.0.2 | MIT License | github.com/mielo-ui/mielo */
@charset "utf-8";

// Declare common custom palette
$material-palette: (
  "blue": (#64b5f6, #42a5f5, #2196f3, #1e88e5, #1976d2),
  "green": (#81c784, #66bb6a, #4caf50, #43a047, #388e3c),
  "yellow": (#fff176, #ffee58, #ffeb3b, #fdd835, #fbc02d),
  "red": (#e57373, #ef5350, #f44336, #e53935, #d32f2f),
  "pink": (#f06292, #ec407a, #e91e63, #d81b60, #c2185b),
  "purple": (#ba68c8, #ab47bc, #9c27b0, #8e24aa, #7b1fa2),
  "deeppurple": (#7e57c2, #673ab7, #5e35b1, #512da8, #311b92),
  "lightgreen": (#aed581, #9ccc65, #8bc34a, #7cb342, #689f38),
  "indigo": (#7986cb, #5c6bc0, #3f51b5, #3949ab, #303f9f),
  "orange": (#ffb74d, #ffa726, #ff9800, #fb8c00, #f57c00),
  "deeporange": (#ff7043, #ff5722, #f4511e, #e64a19, #bf360c),
  "brown": (#a1887f, #8d6e63, #795548, #6d4c41, #5d4037),
  "light": (#ffffff, #f6f5f4, #deddda, #c0bfbc, #9a9996),
  "dark": (#77767b, #5e5c64, #3d3846, #241f31, #000000),
);

// Custom override for \`map.deep-merge\` with custom accent
$custom-accents-preset-override: (
  "accent": (
    pcolor(blue, 4),
    pcolor(blue, 5),
  ),
);

// Custom override for \`map.deep-merge\` with custom color
$custom-colors-preset-override: (
  "green": (
    pcolor(green, 4),
    pcolor(green, 5),
  ),
);
`.trim()

const MAIN_SCSS = `
// Dependencies
@use "reseter.css/src/scss/reseter.scss";

// Local
@use "@mielo-ui/mielo/sass/variables" as *;
@use "context" as *;
@use "palette" as *;

// Custom appearance mapper function with context for accent colors.
@function map-to-view($theme, $accent, $colors) {
  $bg: map.get($colors, "bg");
  $view-bg: if($theme == "dark", rgba($bg, 0.3), rgba($bg, 0.4));
  @return ("overlay": $view-bg, "container": $bg, "border-bg": rgba($bg, 0.07));
}

$context: (
  // Sample for change common container element background states
  "view": (
    "name": "view",
    "default": (
      "dark": (
        "overlay": transparent,
        "bg": transparent,
        "panel": #424242,
        "window": #212121,
        "content": rgba(#fff, 0.08),
        "osd": #0b0b0b,
      ),
      "light": (
        "overlay": transparent,
        "bg": transparent,
        "panel": #eeeeee,
        "window": #e0e0e0,
        "content": #fff,
        "osd": #424242,
      ),
    ),
  ),
);

@include setup-theme(
  // Its override common accent colors scheme for generation 
  $custom-accents-preset-override,
  // Its override extended common colors from pallete for 
  // generation, by default generated from palette 
  $custom-colors-preset-override,
  // Override default palette
  $material-palette,
  // Mapper & default variables context
  $material-context,
);
`.trim()

const OVERRIDE_GLOBAL_SCSS = `
// bundle.scss
// Replace default variables scope in mielo context 

@use "@mielo-ui/mielo/sass/variables" with (
  $palette: (),
);

// Initial base mielo css context with all builders
@use "@mielo-ui/mielo/sass/variables" as *;
`

export function ThemesPage() {
  const onClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    const detect = isDesktop()

    if (typeof(detect) === "object") {
      const { isTauri, isElectron } = detect

      if (isTauri || isElectron) {
        event.preventDefault();
        event.stopPropagation();
        
        openExternalLink(BOILERPLATE_LINK)
      }
    }
  }, [])
  
  return (
    <div className="page theming">
      <Mie.Clamp
        header={
          <Mie.Header
            title="Themes"
            subtitle="How to use custom themes"
            size="large"
            center
          />
        }
      >
        <Mie.L.View f fc bg="content" p="massive" gr="large" r>
          <Mie.L.Text size="large">
            This article is intended to provide an understanding of how themes
            work in mielo.css and how you can create your own theme.
            Additionally, you can use a ready-made template for the easy
            development of your mielo.css builds.
          </Mie.L.Text>

          <Mie.L.Button
            label="Mielo Theme Boilerplate"
            link={BOILERPLATE_LINK}
            onClick={onClick}
            color="purple"
            mb="massive"
          />

          <Mie.L.Text size="large" element="p">
            Each component has a specific convention for declaring the component
            and its states, divided into coloring states and parameter states.
            By default, the basic scenario for the convention looks like this:
          </Mie.L.Text>

          <ul>
            <li>
              <Mie.L.Text size="large">
                Declare the variables used in the component:
              </Mie.L.Text>

              <ul>
                <li>
                  <Mie.L.Text size="large">
                    Declare variables for the components coloring, for both dark
                    and light themes, which can include background colors, font
                    colors, etc.:
                  </Mie.L.Text>

                  <ul>
                    <li>
                      <Mie.L.Text size="large">
                        Declare default coloring variables for the component.
                      </Mie.L.Text>
                    </li>
                    <li>
                      <Mie.L.Text size="large">
                        Declare variables for additional accent states, based on
                        color or status.
                      </Mie.L.Text>
                      <ul>
                        <li>
                          <Mie.L.Text size="large">
                            There are four main status colors: accent, warning,
                            error, success.
                          </Mie.L.Text>
                        </li>
                        <li>
                          <Mie.L.Text size="large">
                            All other accent colors are custom; they are
                            generated from the default palette or from theme
                            settings.
                          </Mie.L.Text>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Mie.L.Text size="large">
                    Declare variables responsible for different state options or
                    variations of parameters, such as sizes. State variables are
                    defined without considering the theme and are responsible
                    for essential positioning and sizing parameters.
                  </Mie.L.Text>
                  <ul>
                    <li>
                      <Mie.L.Text size="large">
                        Declare default variables for the component, which
                        include all necessary variables that will be used within
                        the component body.
                      </Mie.L.Text>
                    </li>
                    <li>
                      <Mie.L.Text size="large">
                        Declare accompanying variables based on named variants.
                      </Mie.L.Text>
                    </li>
                  </ul>
                </li>
                <li>
                  <Mie.L.Text size="large">
                    Define the body of the component and its main states. In the
                    body, the main variables are set, which will be
                    automatically populated from the assigned additional status
                    above, whether its coloring states, size states, or creating
                    different sets of parameters for a single component
                    declaration.
                  </Mie.L.Text>
                </li>
              </ul>
            </li>
          </ul>

          <Mie.L.Text size="large" element="p">
            A sample pseudocode/template for a component declaration in Mielo.
          </Mie.L.Text>

          <Code code={CSS_PRESUDOCODE_SAMPLE} lang="tsx" />

          <Code code={CSS_EXAMPLE_HTML} lang="scss" />

          <Mie.L.Text size="large" element="p">
            If we consider a real example, the declaration for the label
            component looks like this:
          </Mie.L.Text>

          <Code code={SCSS_EXAMPLE_HEADING} lang="scss" />

          <Mie.L.Header
            subtitle="Custom mielo setup"
            title="Sass Project"
            size="large"
          />

          <Mie.L.Text size="large" element="p">
            The theming of Mielo consists of several groups of parameters:
          </Mie.L.Text>

          <ul>
            <li>
              <Mie.L.Text size="large" element="p">
                Basic atomic groups of parameters:
              </Mie.L.Text>

              <ul>
                <li>
                  <Mie.L.Text size="large">
                    Global default text colors
                  </Mie.L.Text>
                </li>
                <li>
                  <Mie.L.Text size="large">Default color palette</Mie.L.Text>
                </li>
                <li>
                  <Mie.L.Text size="large">Sizes</Mie.L.Text>
                  <ul>
                    <li>
                      <Mie.L.Text size="large">Spacings</Mie.L.Text>
                    </li>
                    <li>
                      <Mie.L.Text size="large">Fonts</Mie.L.Text>
                    </li>
                    <li>
                      <Mie.L.Text size="large">Border radii</Mie.L.Text>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Mie.L.Text size="large" element="p">
                Color mappers from color schemes to components. They take colors
                and reassign target component colors to variables based on a
                specified class name convention:
              </Mie.L.Text>
              <ul>
                <li>
                  <Mie.L.Text size="large">Mapper:</Mie.L.Text>
                  <ul>
                    <li>
                      <Mie.L.Text size="large">
                        Accepts the theme name, accent status name, and color
                        map.
                      </Mie.L.Text>
                    </li>
                    <li>
                      <Mie.L.Text size="large">
                        Returns an SCSS hashmap with variables for each
                        component based on status.
                      </Mie.L.Text>
                    </li>
                    <li>
                      <Mie.L.Text size="large">
                        For the color palette preset and the preset of primary
                        accent colors, there is one mapper and data structure.
                      </Mie.L.Text>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Mie.L.Text size="large" element="p">
                Variative parameter groups with variable maps - a declarative
                mechanism for working with variable options for statuses
                unrelated to the appearance and colors of the component, but
                only to its UX. Through this mechanism, following the naming
                convention of variables - or adding such in the theme setup,
                properties such as size, degree of rounding, custom spacings,
                etc., are generated.
              </Mie.L.Text>
            </li>
          </ul>

          <Mie.L.Text size="large" element="p">
            Example and Mechanism of Implementation for the Topic The project
            has several main groups of elements for which all color mappers are
            run, and some are variable (for example, in components where
            parameters for size can be specified): - Components: button,
            checkbox, divider, entry, header, icon, image, index, item, label,
            progress, progressbar, radio, select, slider, text, toggle -
            Containers: activatable, clamp, dialog, headerbar, index, message,
            rows, row.item, scrollbar, shadow, sidebar, splitview, view, window,
            tabs, tab The example will be conducted using the code from the
            Material theme, which you can find in the theme's source code. Here
            is an example of a basic file and the sequence of initializations
            when creating your own bundle and theme styles.
          </Mie.L.Text>

          <Code code={BUNDLER_SCSS} lang="scss" />

          <Mie.L.Text size="large" element="p">
            Next, we need to initialize two main customizable blocks -
            appearance and variant states. Let's start with the block of variant
            states, which are used for sizes and other layout states of the
            components.
          </Mie.L.Text>

          <Code code={SETUP_VARIANTS_SCSS} lang="scss" />

          <Mie.L.Text size="large" element="p">
            Next, we have a more complex block of work with styling, as it
            operates not only on a declarative level but also at the level of
            mapping colors for each component individually through a mappable
            method that can be modified and is quite expressive: when mapping
            each color, you have access to its context: theme, primary color
            palette for mixes, and the context palette of the color preset.
            Additionally, a default styling variable preset is specified, and
            this combination of the mapper and default values forms the basis
            for theme customization.
          </Mie.L.Text>

          <Code code={CUSTOM_PALETTE_SCSS} lang="scss" />

          <Mie.L.Text size="large" element="p">
            After declaring the palette, the initialization of all main contexts
            follows.
          </Mie.L.Text>

          <Code code={MAIN_SCSS} lang="scss" />

          <Mie.L.Text size="large" element="p">
            If you have decided on the design of the application and the colors,
            and are considering optimizing dependencies, in the case of Mielo,
            one of the ways to modify the library build—and the bundle size—is:
            - Modifying the global palette to a custom one assigned by you. -
            Disabling the main palette and using only the primary accent status
            colors. While the impact may not always be significant, this helps
            with optimizing the loading of styles in different environments. In
            such a situation, to reset the declaration of specific groups of
            variables, it is advisable to take a closer look at the source code
            and replace the standard variables using the features of Sass
            modules and `@use with`. For example:
          </Mie.L.Text>

          <Code code={OVERRIDE_GLOBAL_SCSS} lang="scss" />
        </Mie.L.View>
      </Mie.Clamp>
    </div>
  )
}