import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  groups: [
    {
      name: 'english',
      title: 'English',
      default: true,
    },
    {
      name: 'vietnamese',
      title: 'Tiếng Việt',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'english',
    }),
    defineField({
      name: 'title_vi',
      title: 'Title Vietnamese',
      type: 'string',
      group: 'vietnamese',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'meta_description',
      title: 'Meta Description',
      type: 'text',
      group: 'english',
    }),
    defineField({
      name: 'meta_description_vi',
      title: 'Meta Description Vietnamese',
      type: 'text',
      group: 'vietnamese',
    }),
  ],
});
