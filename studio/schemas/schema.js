import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

// documents
import post from "./documents/post"

// taxonomy
import category from "./taxonomy/category"
import author from "./taxonomy/author"

// objects
import blockContent from "./objects/blockContent"
import captionImage from "./objects/captionImage"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // documents
    post,

    // taxonomy
    author,
    category,

    // objects
    blockContent,
    captionImage
  ])
})
