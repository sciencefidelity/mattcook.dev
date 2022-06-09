export interface Excerpt {
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  href: string
  plain_text: string
  text: {
    content: string
    link: string
  }
  type: string
}

export interface Post {
  _id: string
  author: string
  excerpt: Excerpt[]
  published: string
  slug: string
  status: string
  tags: string[]
  title: string[]
}

export type JSONValue =
  | string
  | number
  | boolean
  | JSONObject
  | JSONArray;

interface JSONObject {
  [x: string]: JSONValue
}

interface JSONArray extends Array<JSONValue> { }
