import type { NextPage } from "next"
import Head from "next/head"
import s from "../styles/Home.module.scss"
import u from "../styles/Utils.module.scss"

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
            <li>
              <a href="#about">
                <span className={`${u.blue} ${s.number}`}>01.</span> About
              </a>
            </li>
            <li>
              <a href="#experience">
                <span className={`${u.blue} ${s.number}`}>02.</span> Experience
              </a>
            </li>
            <li>
              <a href="#work">
                <span className={`${u.blue} ${s.number}`}>03.</span> Work
              </a>
            </li>
            <li>
              <a href="#contact">
                <span className={`${u.blue} ${s.number}`}>04.</span> Contact
              </a>
            </li>
            <li>
              <a href="/mattcook-cv-july22.pdf" target="_blank">
                <button type="button" className={`${s.btnResume}`}>
                  CV
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        className={s.asterisk}
      >
        <path
          d="m478 334-142-78 142-78c12-7 16-21 9-33l-19-34c-7-12-22-15-33-8l-139 84 3-162c1-14-10-25-24-25h-38c-14 0-25 11-24 25l3 162-139-84c-11-7-26-4-33 8l-19 34c-7 12-3 26 9 33l142 78-142 78c-12 7-16 21-9 33l19 34c7 12 22 15 33 8l139-84-3 162c-1 14 10 25 24 25h38c14 0 25-11 24-25l-3-162 139 84c11 7 26 4 33-8l19-34c7-12 3-26-9-33Z"
          style={{ fill: "#00B5DD" }}
          transform="matrix(.97945 -.20462 .2045 .97887 -47 58)"
        />
      </svg>
      <div className={`${u.grid} ${s.container}`}>
        <div>
          <p className={s.intro}>Hi, my name is</p>
          <h1 className={s.logo}>
            Matt Cook<span className={s.dot}>.</span>
          </h1>
          <h2 className={s.subheading}>I build things for the modern web.</h2>
          <a href="#contact">
            <button type="button" className={s.btn}>
              Get in touch
            </button>
          </a>
        </div>
      </div>
      <div className={s.links}>
        <ul className={s.socialLinks}>
          <li>
            <a
              href="https://github.com/sciencefidelity"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={s.icon}
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sciencefidelity"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={s.icon}
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/sciencefidelity"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={s.icon}
              >
                <title>Twitter</title>
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </li>
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
            Hi, I’m Matt, I’m a front-end engineer specialising in <b>React</b>{" "}
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
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>React</li>
            <li>Remix</li>
            <li>Node.js</li>
            <li>Sanity.io</li>
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
          <span className={`${u.blue} ${s.number}`}>03.</span> Some things I’ve
          built.
        </h2>
      </section>
      <section id="contact">
        <div className={s.contact}>
          <h2 className={s.sectionHeading}>
            <span className={`${u.blue} ${s.number}`}>04.</span> Let’s talk.
          </h2>
          <h3>Get in touch</h3>
          <p>
            I’m on the lookout for new opportunities, connections,
            collaborators.
            <br />
            Drop me a line, I’d love to hear from you.
          </p>
          <a href="mailto:hello@mattcook.dev">
            <button type="button" className={s.btn}>
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
