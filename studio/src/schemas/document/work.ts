import { defineType, defineField } from 'sanity';
import { WrenchIcon } from '@sanity/icons';

export const work = defineType({
  name: 'work',
  title: 'Work History',
  type: 'document',
  icon: WrenchIcon,
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'dateFrom',
      title: 'Date From',
      type: 'date',
    }),
    defineField({
      name: 'dateTo',
      title: 'Date To',
      type: 'date',
    }),
    defineField({
      name: 'duties',
      title: 'Duties',
      type: 'text',
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
      title: 'jobTitle',
      subtitle: 'company',
    },
  },
});
