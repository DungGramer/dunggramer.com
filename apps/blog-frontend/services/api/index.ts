import imageUrlBuilder from '@sanity/image-url';
import client, { previewClient } from './sanity';

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  coverImage,
`;

const builder = imageUrlBuilder(client);
const getClient = (preview: boolean) => (preview ? previewClient : client);

export function urlFor(source) {
  return builder.image(source);
}

// offset = how many data you want to skip, limit = how many date you want to fetch
export async function getAllBlogs() {
  return await client.fetch(`*[_type == "blog"] | order(date desc) {${blogFields}}`);
}

export async function getPaginatedBlogs(
  { offset = 0, date = 'desc' } = { offset: 0, date: 'desc' }
) {
  return await client.fetch(
    `*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${offset + 6}]`
  );
}

export const onBlogUpdate = (slug) => {
  const client = getClient(true);
  return client.listen(
    `*[_type == "blog" && slug.current == $slug] {
    ${blogFields}
    content[]{..., "asset": asset->}
  }`,
    { slug }
  );
};

export async function getBlogBySlug(slug, preview?: boolean) {
  const currentClient = getClient(preview);

  return await currentClient
    .fetch(
      `*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
      content
    }`,
      { slug }
    )
    .then((res) => (preview ? (res?.[1] ? res[1] : res[0]) : res?.[0]));
}
