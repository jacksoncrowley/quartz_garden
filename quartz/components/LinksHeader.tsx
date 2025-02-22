import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div>
        <div id="links-header">
          <span>
            <a href="/Blog">Blog</a>
          </span>
          <span>
            <a href="/Protocols">Protocols</a>
          </span>
          <span>
            <a href="/CV">CV</a>
          </span>
        </div>
        <hr />
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
