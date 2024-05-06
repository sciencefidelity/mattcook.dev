import { defineType, defineField } from 'sanity';
import { StarIcon } from '@sanity/icons';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: StarIcon,
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
      name: 'permalink',
      title: 'Permalink',
      type: 'url',
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
