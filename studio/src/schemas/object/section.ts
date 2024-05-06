import { defineField, defineType } from 'sanity';
import { TiersIcon } from '@sanity/icons';

export const section = defineType({
  name: 'section',
  title: 'Section',
  type: 'document',
  icon: TiersIcon,

  fields: [
    defineField({
      name: 'type',
      title: 'Section Type',
      type: 'string',
      options: {
        list: ['about', 'work', 'contact'],
      },
    }),
    defineField({
      name: 'id',
      title: 'Id',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'skillsText',
      title: 'Skills List Text',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'about',
    }),
    defineField({
      name: 'projectHeading',
      title: 'Project Heading',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'work',
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
        },
      ],
      hidden: ({ document }) => document?.type !== 'work',
    }),
    defineField({
      name: 'openSourceTitle',
      title: 'Open Source Title',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'work',
    }),
    defineField({
      name: 'openSource',
      title: 'Open Source',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'openSource' }],
        },
      ],
      hidden: ({ document }) => document?.type !== 'work',
    }),
    defineField({
      name: 'contactHeading',
      title: 'Contact Heading',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'contact',
    }),
    defineField({
      name: 'contactText',
      title: 'Contact Text',
      type: 'text',
      hidden: ({ document }) => document?.type !== 'contact',
    }),
    defineField({
      name: 'contactButton',
      title: 'Contact Button Text',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'contact',
    }),
  ],
  preview: {
    select: {
      title: 'id',
      subtitle: 'title',
    },
  },
});
