import { Asterisk } from "components/icon"
import { sections } from "lib/data"
import s from "styles/Home.module.scss"
import u from "styles/Utils.module.scss"

export function Header() {
  return (
    <header className={`${s.relative} ${s.header}`}>
      <nav>
        <div className={s.nav}>
          <ul className={s.navList}>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.menu.toLowerCase()}`}>
                  <span className={`${u.blue} ${s.number}`}>
                    0{section.id}.
                  </span>{" "}
                  {section.menu}
                </a>
              </li>
            ))}
            <li>
              <a href="/mattcook-cv-july22.pdf" target="_blank" tabIndex={-1}>
                <button type="button" className={`${s.btn} ${s.btnResume}`}>
                  CV
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Asterisk />
      <div className={`${u.grid} ${s.container}`}>
        <div>
          <p className={s.intro}>Hi, my name is...</p>
          <h1 className={s.logo}>
            Matt Cook<span className={s.dot}>.</span>
          </h1>
          <h2 className={s.subheading}>
            I build solutions for the modern web.
          </h2>
          <a href="#contact" tabIndex={-1}>
            <button type="button" className={s.btn}>
              Get in touch
            </button>
          </a>
        </div>
      </div>
    </header>
  )
}
