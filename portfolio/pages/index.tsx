import type { NextPage } from "next"
import Head from "next/head"
import s from "../styles/Home.module.scss"
import u from "../styles/Utils.module.scss"

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Hi! I’m Matt | Front End Engineer</title>
      <meta
        name="description"
        content="Matt Cook – front-end engineer working with React and TypeScript"
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
              <button type="button" className={`${s.btnResume}`}>
                CV
              </button>
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
          <h1 className={s.logo}>Matt Cook.</h1>
          <h2 className={s.subheading}>I build things for the modern web.</h2>
          {/* <h2 className={s.subheading}>
            Front End Engineer <span className={u.blue}>|</span> React{" "}
            <span className={u.blue}>|</span> TypeScript
          </h2> */}
          <button type="button" className={s.btn}>
            Get in touch
          </button>
        </div>
      </div>
    </header>
  </div>
)

export default Home
