import { defineField, defineType } from 'sanity';
import { CogIcon } from '@sanity/icons';

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  groups: [
    {
      name: 'site',
      title: 'Site',
    },
    {
      name: 'meta',
      title: 'Meta data',
    },
    {
      name: 'social',
      title: 'Social',
    },
  ],
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'site',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'string',
      group: 'site',
    }),
    defineField({
      name: 'permalink',
      title: 'Site URL',
      type: 'url',
      group: 'site',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'site',
    }),
    // defineField({
    //   name: 'language',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'favicon',
    //   type: 'image',
    // }),

    defineField({
      name: 'social',
      title: 'Social Links',
      type: 'social',
      group: 'social',
    }),
    defineField({
      name: 'socialCard',
      title: 'Social Card',
      type: 'socialCard',
      group: 'social',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
        media: CogIcon,
      };
    },
  },
});
