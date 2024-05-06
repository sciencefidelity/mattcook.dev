import { defineType, defineField } from 'sanity';
import { HeartIcon } from '@sanity/icons';

export const openSource = defineType({
  name: 'openSource',
  title: 'Open Source',
  type: 'document',
  icon: HeartIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'repo',
      title: 'Repository',
      type: 'url',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
