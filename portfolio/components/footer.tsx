import { GitHub, LinkedIn, Twitter } from "components/icon"
import { social } from "lib/data"
import s from "styles/Home.module.scss"

export function Footer() {
  return (
    <footer>
      <div className={s.links}>
        <ul className={s.socialLinks}>
          {social.map((site) => (
            <li>
              <a href={site.url} target="_blank" rel="noreferrer">
                {site.site === "GitHub" && <GitHub />}
                {site.site === "LinkedIn" && <LinkedIn />}
                {site.site === "Twitter" && <Twitter />}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.email}>
        <a href="mailto:hello@mattcook.dev">hello@mattcook.dev</a>
      </div>
      <div>
        <a
          href="https://github.com/sciencefidelity/mattcook.dev"
          target="_blank"
          rel="noreferrer"
        >
          Site
        </a>{" "}
        by Matt {new Date().getFullYear()}
      </div>
    </footer>
  )
}
