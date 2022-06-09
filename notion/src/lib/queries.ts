import groq from "groq"

export const indexQuery = groq`{
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

export const input = groq`*[_type == "user"]{ name }`
