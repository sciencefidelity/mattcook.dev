import 'dotenv/config'
import { Client } from "@notionhq/client"
import { groq } from "./lib.js"

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const databaseId = process.env.NOTION_DATABASE_ID
let paths = []
let props = []

const pathQuery = await groq`
  *.properties{ "params": { "slug": slug.rich_text[0].plain_text } }
`

const pageQuery = await groq`{
  "posts": *[] | order(properties.publishedAt.date.start desc){
    "_id": id,
    "author": properties.authors.relation[].id,
    "excerpt": properties.excerpt.rich_text,
    "published": properties.publishedAt.date.start,
    "slug": properties.slug.rich_text[0].plain_text,
    "status": properties.status.select.name,
    "tags": properties.tags.multi_select[].name,
    "title": properties.body.title[].plain_text
  }
}`

const getPaths = async () => {
  const payload = {
    path: `databases/${databaseId}/query`,
    method: "POST"
  }

  const { results } = await notion.request(payload)
  paths = await pathQuery(results)
}

const getProps = async () => {
  const payload = {
    path: `databases/${databaseId}/query`,
    method: "POST"
  }

  const { results } = await notion.request(payload)
  props = await pageQuery(results)
}

getPaths().then(() => console.log(paths))
getProps().then(() => console.log(props))
