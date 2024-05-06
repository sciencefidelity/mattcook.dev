import { defineField, defineType } from 'sanity';

export const social = defineType({
  name: 'social',
  title: 'Social links',
  type: 'array',
  of: [
    {
      name: 'socialLink',
      title: 'Social link',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Social network',
          type: 'string',
          options: {
            list: [
              'facebook',
              'github',
              'instagram',
              'linkedin',
              'pinterest',
              'soundcloud',
              'tiktok',
              'twitter',
              'youtube',
              'vimeo',
            ],
          },
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'url',
        }),
      ],
    },
  ],
});
