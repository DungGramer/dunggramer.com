import { client } from './client';

export const getAllBlogs = async (sort = 'desc') => {
  return await client.fetch<{
    title: string;
    _updatedAt: string;
    slug: string;
    categories: string[];
    tags: string[];
  }>(`*[_type == "post"] | order(date ${sort}) {
    title,
    _updatedAt,
    'slug': slug.current,
    categories,
    tags,
  }
  `);
};

export const getPaginatedBlogs = async ({ offset = 0, date = 'desc' }) => {
  return await client.fetch<{
    title: string;
    _updatedAt: string;
    slug: string;
    categories: string[];
    tags: string[];
  }>(`*[_type == "post"] | order(date ${date}) {
    title,
    _updatedAt,
    'slug': slug.current,
    categories,
    tags,
  }[${offset}...${offset + 6}]
  `);
};

export const getBlogBySlug = async (slug: string) => {
  return await client.fetch<{
    title: string;
    _updatedAt: string;
    body: any;
    categories: string[];
    tags: string[];
  }>(`*[_type == "post" && slug.current == "${slug}"] {
    title,
    _updatedAt,
    body,
    categories,
    tags,
  }
  `);
};

export const getAllCategory = async () => {
  return await client.fetch<{
    title: string;
    title_vi: string;
    _id: string;
    slug: string;
  }>(`*[_type == "category"] {
    title,
    title_vi,
    _id,
    'slug': slug.current
  }
  `);
};

export const getAllTags = async () => {
  return await client.fetch<{
    title: string;
    _id: string;
    slug: string;
  }>(`*[_type == "tags"] {
    title,
    _id,
    'slug': slug.current
  }
  `);
};

export const getAllTodayILearned = async () => {
  return await client.fetch<{
    title: string;
    id: string;
    slug: string;
    tags: string[];
    updated_at: string;
    language: string;
  }>(`*[_type == "til"] {
    title,
    'id': _id,
    'slug': slug.current,
    tags,
    'updated_at': _updatedAt,
    language,
  }
  `);
};
