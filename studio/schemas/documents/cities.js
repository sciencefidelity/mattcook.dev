export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "captionImage",
      options: {
        hotspot: true
      }
    },
    {
      name: "body",
      title: "Body",
      type: "text"
    }
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage"
    }
  }
}
