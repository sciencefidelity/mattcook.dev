import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import sanityClient from "lib/sanityClient";

/**
 * Returns the image url for the given image object
 * @remarks uses `sanityClient` and `imageUrlBuilder` from NPM
 * @param source - the image object
 * @returns the image url
 */
export function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(sanityClient).image(source);
}
