import type { GetStaticProps, GetStaticPaths, NextPage } from "next"
// import Head from "next/head"
import { Client } from "@notionhq/client"
// import dayjs from "dayjs"
import { groq } from "lib/utils"
// import { Post } from "lib/interfaces"
import u from "styles/utils.module.scss"

interface Props {
  post: any
}
interface Params {
  id: string
}

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const databaseId: string = process.env.NOTION_DATABASE_ID

export const getDatabase = async (databaseId: string) => {
  const query = await groq`
  *[]{ "params":{ "id": id } }
  `
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  return query(response.results)
}
export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getDatabase(databaseId)
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params
  const post = await getPage(id)
  return {
    props: {
      post
    }
  }
}

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <div className={`${u.container}`}>
      <h1>{post.properties.body.title.map(e => e.plain_text).join(" ")}</h1>
      {/* <pre>{JSON.stringify(post, undefined, 2)}</pre> */}
    </div>
  )
}
export default PostPage
