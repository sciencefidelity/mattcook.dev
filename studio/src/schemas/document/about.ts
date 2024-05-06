import { defineType, defineField } from 'sanity';
import { RobotIcon } from '@sanity/icons';

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'telephone',
      title: 'Telephone',
      type: 'string',
    }),
    defineField({
      name: 'address1',
      title: 'Address Line 1',
      type: 'string',
    }),
    defineField({
      name: 'address2',
      title: 'Address Line 2',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'postcode',
      title: 'Post Code',
      type: 'string',
    }),
    defineField({
      name: 'personalStatement',
      title: 'Personal Statement',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About',
        media: RobotIcon,
      };
    },
  },
});
