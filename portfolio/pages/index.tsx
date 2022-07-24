import type { NextPage } from "next"
import Head from "next/head"
import { Asterisk, GitHub, LinkedIn, Twitter } from "components/icon"
import { menu, skills, social } from "lib/data"
import s from "styles/Home.module.scss"
import u from "styles/Utils.module.scss"

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Matt Cook</title>
      <meta
        name="description"
        content="Front-end engineer specialising in React and TypeScript."
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="mask-icon" href="/mask-icon.svg" color="#00B5DD" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
    </Head>
    <header className={`${s.relative} ${s.header}`}>
      <nav>
        <div className={s.nav}>
          <ul className={s.navList}>
            {menu.map((item, idx) => (
              <li>
                <a href={`#${item.toLowerCase()}`}>
                  <span className={`${u.blue} ${s.number}`}>0{idx + 1}.</span>{" "}
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="/mattcook-cv-july22.pdf" target="_blank">
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
          <a href="#contact">
            <button type="button" className={s.btn}>
              Get in touch
            </button>
          </a>
        </div>
      </div>
      <div className={s.links}>
        <ul className={s.socialLinks}>
          {social.map((site) => (
            <li>
              <a href={site.url} target="_blank" rel="noreferrer">
                {site.site === "GitHub" ? (
                  <GitHub />
                ) : site.site === "LinkedIn" ? (
                  <LinkedIn />
                ) : (
                  <Twitter />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.email}>
        <a href="mailto:hello@mattcook.dev">hello@mattcook.dev</a>
      </div>
    </header>
    <main>
      <section id="about">
        <div className={s.about}>
          <h2 className={s.sectionHeading}>
            <span className={`${u.blue} ${s.number}`}>01.</span> About me.
          </h2>
          <p>
            Hi, I’m Matt. I’m a front-end engineer specialising in <b>React</b>{" "}
            and <b>TypeScript</b>. I’m passionate about structured content,
            designing unique user experiences, and learning new front-end
            frameworks and programming languages.
          </p>
          <p>
            I regularly build and contribute to open-source projects, create
            internet art, and contribute to online hackathons. I speak fluent
            Russian, and regularly teach and practice meditation.
          </p>
          <p>Here are a few of my current most loved technologies:</p>
          <ul className={s.skillsList}>
            {skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </section>
      <section id="experience">
        <h2 className={s.sectionHeading}>
          <span className={`${u.blue} ${s.number}`}>02.</span> Where I’ve
          worked.
        </h2>
      </section>
      <section id="work">
        <h2 className={s.sectionHeading}>
          <span className={`${u.blue} ${s.number}`}>03.</span> Recent things
          I’ve built.
        </h2>
      </section>
      <section id="contact">
        <div className={s.contact}>
          <h2 className={s.sectionHeading}>
            <span className={`${u.blue} ${s.number}`}>04.</span> Let’s talk.
          </h2>
          <h3>Get in touch.</h3>
          <p>
            I’m on the lookout for new opportunities, connections,
            collaborators.
            <br />
            Drop me a line, I’d love to hear from you.
          </p>
          <a href="mailto:hello@mattcook.dev">
            <button type="button" className={`${s.btn}`}>
              Say Hey 👋
            </button>
          </a>
        </div>
      </section>
    </main>
    <footer>Site by Matt {new Date().getFullYear()}</footer>
  </div>
)

export default Home
