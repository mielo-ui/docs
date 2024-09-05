import { MouseEventHandler, useCallback } from "react"
import * as Mie from "@mielo-ui/mielo-react"

import { isDesktop, openExternalLink } from "../../../../desktop"
import { GithubIcon } from "./GithubIcon"

const GITHUB = "https://github.com/mielo-ui/mielo.css"

export interface GithubLinkProps {
  target: "sidebar" | "headerbar"
}

export function GithubLink({ target }) {
  const onClick: MouseEventHandler<HTMLDivElement> = useCallback((event) => {
    const detect = isDesktop()

    if (typeof(detect) === "object") {
      const { isTauri, isElectron } = detect

      if (isTauri || isElectron) {
        event.preventDefault();
        event.stopPropagation();
        
        openExternalLink(GITHUB)
      }
    }
  }, [])
  
  const props: any = target === "sidebar" ? {
    mt: "large",
    mb: "large",
    p: "small",
    active: true,
    accent: true,
    mh: true,
    r: true,
  } : {
    p: "tiny",
    mr: true,
    r: true,
  }

  return (
    <Mie.L.Item
      icon={<Mie.L.Icon mr="small" accent icon={<GithubIcon />} />}
      onClick={onClick}
      link={GITHUB}
      activatable
      {...props}
      title={
        <Mie.Text fbold accent>
          GitHub
        </Mie.Text>
      }
    />
  )
}