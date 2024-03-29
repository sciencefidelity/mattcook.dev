import mwaScreenshot from "public/images/mwa-home-desktop.jpg";
import naenScreenshot from "public/images/naen-home-desktop.jpg";
import knappScreenshot from "public/images/knapp-home-desktop.jpg";

// export const menu = ["About", "Experience", "Work", "Contact"];

export const sections = [
  {
    id: 1,
    menu: "About",
    heading: "About me.",
  },
  // {
  //   id: 2,
  //   menu: "Experience",
  //   heading: "Where I’ve worked.",
  // },
  {
    id: 2,
    menu: "Work",
    heading: "Recent things I’ve built.",
  },
  {
    id: 3,
    menu: "Contact",
    heading: "Let’s talk.",
  },
];

export const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Remix",
  "Node.js",
  "Sanity.io",
];

export const social = [
  {
    site: "GitHub",
    url: "https://github.com/sciencefidelity",
  },
  {
    site: "LinkedIn",
    url: "https://linkedin.com/in/sciencefidelity",
  },
  {
    site: "Twitter",
    url: "https://twitter.com/sciencefidelity",
  },
];

export const work = [
  {
    id: 1,
    title: "Mid Wales Arts",
    body: "Design and build of a multilingual static site for a vibrant arts and culture centre. Includes dynamic pages for news, events, workshops, exhibitions and artists that are updated  via a custom CMS used by non-technical content editors.",
    stack: ["React", "TypeScript", "Next.js", "Sanity", "GROQ", "Sass"],
    url: "https://midwalesarts.org.uk",
    repo: "https://github.com/sciencefidelity/midwalesarts.org.uk",
    image: mwaScreenshot,
  },
  {
    id: 2,
    title: "National Arts & Education Network",
    body: "Site for a national education training provider. Includes a platform for course documentation and videos, events. Sanity Studio includes custom implementations of a newsletter builder and Eventbrite connection to the Eventbrite API.",
    stack: ["React", "TypeScript", "Remix", "Eventbrite API", "Mapbox"],
    url: "https://artsed.wales",
    repo: "https://github.com/sciencefidelity/artsed.wales",
    image: naenScreenshot,
  },
  {
    id: 3,
    title: "The Estate of Stefan Knapp",
    body: "Multilingual static site for the centenary of the famous Polish and British artist Stefan Knapp. The site is built with Astro and Vue and includes a custom SSG solution built with Vite. The site data is published in Sanity Studio and queried with GROQ.",
    stack: ["Vue", "Astro", "TypeScript", "Vite", "Sanity", "GROQ", "Sass"],
    url: "https://stefanknapp.art",
    repo: "https://github.com/sciencefidelity/stefanknapp.art",
    image: knappScreenshot,
  },
];

export const projects = [
  {
    id: 1,
    title: "Nova-Dart",
    body: "IDE extension for Nova with syntax highlighting, LSP and daemon integration, code completions and clips for Flutter app development.",
    stack: ["TypeScript", "Nova"],
    repo: "https://github.com/sciencefidelity/Nova-Dart",
  },
  {
    id: 2,
    title: "Nova-Astro",
    body: "IDE extension for Nova with syntax highlighting, LSP integration, code completions, clips for developing static sites with Astro.js.",
    stack: ["TypeScript", "Nova"],
    repo: "https://github.com/sciencefidelity/Nova-Astro",
  },
  {
    id: 3,
    title: "Sanity SEO Preview",
    body: "A live preview of social shares on Facebook and Twitter, and Google search results for integration into Sanity Studio.",
    stack: ["React", "TypeScript", "Sanity.io"],
    repo: "https://github.com/sciencefidelity/sanity-plugin-seo-preview",
  },
];

export const experience = [
  {
    id: 1,
    role: "Front-End Developer",
    organisation: "National Arts & Education Network",
    dates: "Sept 2019 – present",
    responsibilities: [
      "Developed a website with React, Remix and TypeScript to advertise professional development events for teachers and artists in the Expressive Arts Curriculum.",
      "Designed and implemented digital marketing tools that have increased ticket sales and course attendance by 300%.",
      "Designed a structured content strategy implemented with Sanity.io to be used by non-technical content editors.",
      "Developed a course platform with React and Sanity.io to present a series of Expressive Arts learning resources for teachers, including full text search with Algolia.",
      "Recently won a funding proposal to create a digital map of arts and culture venues throughout Wales that will use React, Prisma and PlanetScale.",
    ],
  },
  {
    id: 2,
    role: "Front-End Developer",
    organisation: "Mid Wales Arts",
    dates: "July 2020 – present",
    responsibilities: [
      "Developed a multilingual React website with Next.js to provide a beautiful and intuitive user experience on all devices.",
      "Designed a custom i18n implementation of Next.js and Sanity.io that enables all slugs and routes to be localised into English and Welsh to improve SEO.",
      "Designed a structured content strategy with Sanity.io to create a streamlined user experience highlighting the diverse activities of a vibrant arts centre.",
      "Implemented a custom CMS with Sanity.io for editing of all website content by non-technical content editors.",
      "Increased website traffic by 1000%, visit duration by 400%, and reduced bounce rate.",
      "Implemented an e-commerce integration with Shopify, Sanity.io and Next.js to sell original artworks.",
    ],
  },
  {
    id: 3,
    role: "Web Developer",
    organisation: "Freelance",
    dates: "May 2012 – present",
    responsibilities: [
      "Development of unique websites for arts, culture and not-for-profit clients with front-end frameworks including React, Svelte and Vue.",
      "Design of custom content strategies with Sanity.io and Strapi, with integrated custom CMS implementations for non-technical content creators.",
      "Built custom multilingual WordPress and Drupal themes with JavaScript and PHP, with custom content types, plugins and WooCommerce integrations.",
    ],
  },
  {
    id: 4,
    role: "Studio Director",
    organisation: "Warwick Hall Studios",
    dates: "Oct 2011 – present",
    responsibilities: [
      "Founded and continue to manage a charity providing affordable studios for 20 artists.",
    ],
  },
  {
    id: 5,
    role: "Artist",
    organisation: "Freelance",
    dates: "August 2002 – present",
    responsibilities: [
      "Regular creation of unique multimedia art projects all over the world in galleries, theatres and the public realm using digital media, sound, video, and electronics.",
      "Regular teaching of arts workshops for children and teachers in animation, creative web development, video production and digital competency.",
    ],
  },
];
