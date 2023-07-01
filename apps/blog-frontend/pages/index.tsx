import { getPaginatedBlogs } from 'services/api';
import styles from './index.module.scss';
import { useGetBlogsPages } from 'services/actions/pagination';
import { useState } from 'react';

export function Index({ blogs, preview }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  const { data, size, setSize, hitEnd } = useGetBlogsPages({ filter });
  console.log(`📕 { data, size, setSize, hitEnd } - 13:index.tsx \n`, {
    data,
    size,
    setSize,
    hitEnd,
  });

  return <div>Hi</div>;
}

export default Index;

export async function getStaticProps({ preview = false }) {
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' });
  return {
    props: {
      blogs,
      preview,
    },
    revalidate: 1,
  };
}
