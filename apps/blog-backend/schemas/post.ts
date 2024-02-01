import { defineField, defineType } from 'sanity';

enum GROUPS {
  POST = 'post',
  MEDIA = 'media',
  META = 'meta',
  REFERENCE = 'reference',
  SERIES = 'series',
}

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    {
      name: GROUPS.POST,
      title: `Post`,
      default: true,
    },
    {
      name: GROUPS.MEDIA,
      title: `Media`,
    },

    {
      name: GROUPS.META,
      title: `Meta`,
    },
    {
      name: GROUPS.REFERENCE,
      title: `References`,
    },
    {
      name: GROUPS.SERIES,
      title: `Series`,
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      group: GROUPS.POST,
      type: 'string',
    }),
    defineField({
      group: GROUPS.POST,
      name: `subtitle`,
      title: `Subtitle`,
      type: `string`,
    }),
    defineField({
      group: GROUPS.POST,
      name: `description`,
      title: `Description`,
      type: `text`,
      validation: (Rule) => [
        Rule.min(5).error(`Description too short.`),
        Rule.max(150).error(`Description is too long.`),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      group: GROUPS.POST,
      type: 'blockContent',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      group: GROUPS.META,
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'meta_description',
      title: 'Meta Description',
      group: GROUPS.META,
      type: 'text',
    }),
    defineField({
      name: 'meta_tags',
      title: 'Meta Tags',
      group: GROUPS.META,
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      group: GROUPS.POST,
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      group: GROUPS.MEDIA,
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'URL',
          type: 'string',
          title: 'URL',
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      group: GROUPS.REFERENCE,
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      group: GROUPS.REFERENCE,
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tags' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      group: GROUPS.REFERENCE,
      type: 'datetime',
    }),
    defineField({
      name: 'isSeries',
      title: 'Is Series',
      group: GROUPS.SERIES,
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    }),
    defineField({
      name: 'series',
      title: 'Series',
      group: GROUPS.SERIES,
      type: 'reference',
      to: { type: 'series' },
      hidden: ({ document }) => !document?.isSeries,
    }),
    defineField({
      type: `language`,
      name: `language`,
      group: `meta`,
    }),
    // defineField({
    //   group: `reference`,
    //   name: `relatedPosts`,
    //   title: `Related Posts`,
    //   type: `array`,
    //   of: [
    //     {
    //       type: `reference`,
    //       to: [
    //         {
    //           type: `post`,
    //         },
    //         { type: `til` },
    //       ],
    //       options: {
    //         filter: ({
    //           document,
    //         }: {
    //           document: {
    //             _type: string;
    //             _id: string;
    //           };
    //         }) => {
    //           const { _type, _id } = document;

    //           /**
    //            * Don't want to allow selecting drafts
    //            */
    //           if (_id.includes(`drafts`)) {
    //             return false;
    //           }

    //           return _type === `post` || _type === `til`;
    //         },
    //       },
    //     },
    //   ],
    //   validation: (Rule) => [
    //     Rule.unique().error(`You can't select the same post twice`),
    //     Rule.max(2).error(`Too many related posts. You should select only 2`),
    //   ],
    // }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
