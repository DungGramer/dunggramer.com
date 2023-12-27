import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      type: `language`,
      name: `language`,
    }),
  ],
});
