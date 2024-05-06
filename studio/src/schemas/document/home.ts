import { defineType, defineField } from 'sanity';
import { HomeIcon } from '@sanity/icons';

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'greeting',
      title: 'Greeting',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    // TODO: define a field that inserts the current year into a string
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
    }),
    defineField({
      name: 'siteRepo',
      title: 'Site Repo',
      type: 'url',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'section' }],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
        media: HomeIcon,
      };
    },
  },
});
