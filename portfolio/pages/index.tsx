import type { NextPage } from "next"
import { skills } from "lib/data"
import { BaseHead } from "components/base-head"
import { Footer } from "components/footer"
import { Header } from "components/header"
import s from "styles/Home.module.scss"
import u from "styles/Utils.module.scss"

const Home: NextPage = () => (
  <>
    <BaseHead />
    <Header />
    <main>
      <section id="about">
        <div className={s.about}>
          <h2 className={s.sectionHeading}>
            <span className={`${u.blue} ${s.number}`}>01.</span> About me.
          </h2>
          <p>
            Hi, I&rsquo;m Matt. I&rsquo;m a front-end engineer specialising in{" "}
            <b>React</b> and <b>TypeScript</b>. I&rsquo;m passionate about
            structured content, designing unique user experiences, and learning
            new front-end frameworks and programming languages.
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
          <span className={`${u.blue} ${s.number}`}>02.</span> Where I&rsquo;ve
          worked.
        </h2>
      </section>
      <section id="work">
        <h2 className={s.sectionHeading}>
          <span className={`${u.blue} ${s.number}`}>03.</span> Recent things
          I&rsquo;ve built.
        </h2>
      </section>
      <section id="contact">
        <div className={s.contact}>
          <h2 className={s.sectionHeading}>
            <span className={`${u.blue} ${s.number}`}>04.</span> Let&rsquo;s
            talk.
          </h2>
          <h3>Get in touch.</h3>
          <p>
            I&rsquo;m on the lookout for new opportunities, connections,
            collaborators.
            <br />
            Drop me a line, I&rsquo;d love to hear from you.
          </p>
          <a href="mailto:hello@mattcook.dev">
            <button type="button" className={`${s.btn}`}>
              Say Hey 👋
            </button>
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </>
)

export default Home
