import { useCallback, useEffect, useState } from "react"
import { urlFor } from "lib/utils"
import { SanityImage } from "sanity-studio"
import s from "styles/Home.module.scss"

interface Photography {
  _key: string
  title: string
  image: SanityImage
}

interface Props {
  idx: number
  image: Photography
  imagesPerPage: number
}

export function SanityImageComponent({ idx, image, imagesPerPage }: Props) {
  const [loaded, setLoaded] = useState(false)
  const onLoad = useCallback(() => {
    console.log("callback called")
    setLoaded(true)
  }, [])
  useEffect(() => {
    console.log("effect called")
    setLoaded(true)
  }, [loaded, onLoad])
  console.log("component rendered")
  return (
    <div
      key={image._key}
      className={`${s.box} ${idx >= imagesPerPage ? s.hidden : ""}`}
    >
      <div className={s.imageContainer}>
        <img
          key={image._key}
          src={urlFor(image.image)
            .auto("format")
            .quality(100)
            .width(1200)
            .height(1200)
            .url()}
          alt={image.title}
          width={400}
          height={400}
          className={s.image}
          onLoad={onLoad}
          loading="lazy"
        />
      </div>
      <div
        className={`${s.fallbackContainer}  ${
          loaded && idx < imagesPerPage ? s.loaded : ""
        }`}
      >
        <img
          key={image._key}
          src={urlFor(image.image)
            .auto("format")
            .quality(70)
            .width(15)
            .height(15)
            .blur(10)
            .url()}
          alt={image.title}
          width={400}
          height={400}
          className={`${s.fallback}`}
          loading="eager"
        />
      </div>
    </div>
  )
}
