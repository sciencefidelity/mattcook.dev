import { defineField, defineType } from 'sanity';

export const socialCard = defineType({
  name: 'socialCard',
  title: 'Social Card',
  type: 'object',
  description: 'Open Graph data',
  fields: [
    defineField({
      name: 'ogTitle',
      title: 'Social Title',
      type: 'string',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Social Description',
      type: 'string',
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Image',
      type: 'image',
    }),
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
});
