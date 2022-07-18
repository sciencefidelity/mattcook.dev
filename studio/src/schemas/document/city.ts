import {defineType, defineField} from 'sanity'
import {CameraFlash} from '../../components/twemoji'

export const city = defineType({
  name: 'city',
  title: 'City',
  type: 'document',
  fields: [
    defineField({
      name: 'photography',
      title: 'Photography',
      type: 'array',
      of: [
        {
          name: 'photography',
          title: 'Photography',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'photography',
        media: CameraFlash,
      }
    },
  },
})
