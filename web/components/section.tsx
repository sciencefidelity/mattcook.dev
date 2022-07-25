import Image from "next/image"
import { projects, sections, skills, work } from "lib/data"
import { GitHubWork, ExternalLink } from "components/icon"
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
          <li key={skill}>{skill}</li>
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
      <a href="mailto:hello@mattcook.dev" tabIndex={-1}>
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
  return (
    <>
      {work.map((project, idx) => (
        <div
          key={project.id}
          className={`${s.project} ${idx % 2 !== 0 ? s.reverse : ""}`}
        >
          <div>
            <header>
              <p className={s.featured}>Featured project</p>
              <h3 className={s.projectTitle}>{project.title}</h3>
            </header>
            <article>
              <div className={s.screenshotSmall}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={750}
                  height={450}
                />
              </div>
              <p className={s.body}>{project.body}</p>
            </article>
            <footer>
              <ul className={s.stack}>
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className={s.workLinks}>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  <span className={u.srOnly}>Link to GitHub repo</span>
                  <GitHubWork className="workIcon" />
                </a>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <span className={u.srOnly}>Link to live site</span>
                  <ExternalLink />
                </a>
              </div>
            </footer>
          </div>
          <div>
            <a href={project.url} target="_blank" rel="noreferrer">
              <div className={s.screenshot}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={750}
                  height={450}
                />
              </div>
            </a>
          </div>
        </div>
      ))}
      <div className={s.openSource}>
        <h2>Open Source</h2>
        <div className={s.osGrid}>
          {projects.map((project) => (
            <div key={project.id} className={s.gridItem}>
              <div className={s.osIcons}>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  <span className={u.srOnly}>Link to GitHub repo</span>
                  <GitHubWork className="osIcon" />
                </a>
              </div>
              <h3 className={s.osTitle}>{project.title}</h3>
              <p className={s.osBody}>{project.body}</p>
              <div className={s.stackWrap}>
                <ul className={s.osStack}>
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
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
