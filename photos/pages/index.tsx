import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import groq from "groq"
import sanityClient from "lib/sanityClient"
import { urlFor } from "lib/utils"
import { SanityImage } from "sanity-studio"
import s from "styles/Home.module.scss"

interface Photography {
  _key: string
  title: string
  image: SanityImage
}

interface Data {
  photography: Photography[]
}

interface Props {
  data: Data
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const query: string = groq`*[_type == "city"][0]{
  "photography": photography[]
}`

export const getStaticProps: GetStaticProps = async () => {
  const data: Data = await sanityClient.fetch(query)
  return {
    props: { data },
  }
}

const Home: NextPage<Props> = ({ data }: Props) => {
  const { photography } = data
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={s.container}>
        <div className={s.gallery}>
          {photography.map((photo) => (
            <img
              src={urlFor(photo.image)
                .auto("format")
                .quality(85)
                .width(400)
                .height(400)
                .url()}
              alt={photo.title}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
