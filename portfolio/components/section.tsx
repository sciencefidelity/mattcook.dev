import { sections, skills } from "lib/data"
import s from "styles/Home.module.scss"
import u from "styles/Utils.module.scss"

function About() {
  return (
    <>
      <p>
        Hi, I&rsquo;m Matt. I&rsquo;m a front-end engineer specialising in{" "}
        <b>React</b> and <b>TypeScript</b>. I&rsquo;m passionate about
        structured content, designing unique user experiences, and learning new
        front-end frameworks and programming languages.
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
    </>
  )
}

function Contact() {
  return (
    <>
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
    </>
  )
}

function Experience() {
  return <>{}</>
}

function Work() {
  return <>{}</>
}

export function Sections() {
  return (
    <>
      {sections.map((section) => (
        <section id={section.menu.toLowerCase()} key={section.id}>
          <div className={s[section.menu.toLowerCase()]}>
            <h2 className={s.sectionHeading}>
              <span className={`${u.blue} ${s.number}`}>0{section.id}.</span>{" "}
              {section.heading}
            </h2>
            {section.menu === "About" && <About />}
            {section.menu === "Experience" && <Experience />}
            {section.menu === "Work" && <Work />}
            {section.menu === "Contact" && <Contact />}
          </div>
        </section>
      ))}
    </>
  )
}
