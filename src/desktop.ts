import { open as tauriOpen } from "@tauri-apps/plugin-shell"
import { getCurrentWindow } from "@tauri-apps/api/window"

export function isDesktop() {
  const isTauri = (window as any).__TAURI_INTERNALS__ && !!getCurrentWindow?.()
  const isElectron = /electron/i.test(navigator.userAgent)

  return isTauri || (isElectron && { isTauri, isElectron })
}

export function callWindowControl(action: string) {
  const detect = isDesktop()

  if (typeof detect !== "boolean") {
    const { isTauri, isElectron } = detect

    if (isTauri) {
      const appWindow =
        (window as any).__TAURI_INTERNALS__ && getCurrentWindow()
      appWindow?.[action]?.()
    }

    if (isElectron) {
      (window as any)?.api?.windowControl(action)
    }
  }
}

export function openExternalLink(link: string) {
  const detect = isDesktop()

  if (typeof detect !== "boolean") {
    const { isTauri, isElectron } = detect

    if (isTauri) {
      tauriOpen(link)
    }

    if (isElectron) {
      (window as any)?.api?.otherOpenExternal(link)
    }
  }
}