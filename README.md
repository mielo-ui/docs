<p align="center">
  <img src="https://raw.githubusercontent.com/mielo-ui/mielo.css/main/logo.png" />
</p>

<h1 align="center">
  Documentation
</h1>

<p align="center">
  Mielo UI Documentation site with examples.
</p>

![dark](https://raw.githubusercontent.com/mielo-ui/mielo.css/main/media/Mielo.Dark.png)

Website & documentation for [mielo.css](https://github.com/mielo-ui/mielo.css) framework & for react wrapper.

## Browser Support

Mielo is compatible with **recent** versions of:

- Chrome
- Edge
- Firefox
- Opera
- Safari

Internet Explorer is not supported.

# Development
For build library from source:

``` sh
git clone https://github.com/friktor/mielo-docs
cd mielo-docs

npm install # or "yarn"
npm run fmt # format & linting components
npm run build # build module library with .d.ts
npm run dev # or yarn dev, for start vite dev server
```

# Tauri
Also this app can build as desktop app with tauri.

Development:
``` sh
yarn tauri dev

# or if have acceleration problems on linux/arch like:
# https://bugs.webkit.org/show_bug.cgi?id=180739
WEBKIT_DISABLE_DMABUF_RENDERER=1 yarn tauri dev

```

### Building:
```sh
yarn tauri build
```

### Thoubleshoting
`Could not find dependency: libicui18n.so.72` on Arch - try run `yay -S icu72`.
`Could not find dependency: libavif.so.15` on Arch - `sudo ln -s /usr/lib/libavif.so.16 /usr/lib/libavif.so.15`
`/usr/bin/strip: Unable to recognise the format of the input file...` on any linux - `NO_STRIP=true yarn tauri build`
If have acceleration problems on linux/arch, or not show window - try run with env `WEBKIT_DISABLE_DMABUF_RENDERER=1`, like
``