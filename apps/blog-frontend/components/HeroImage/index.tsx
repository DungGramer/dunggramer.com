import { getAllBlogs } from '#blog-frontend/sanity/query';
import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { BlogPost } from './BlogPost';
import { posts } from './data';

export const HeroImage = async () => {
  const p = await getAllBlogs();
  console.log(`📕 posts - 28:index.tsx \n`, p);

  return (
    <Box bg="bg.surface">
      <Container pb={{ base: '16', md: '24' }} mt={{ base: '-16', md: '-24' }}>
        <Stack spacing={{ base: '16', md: '24' }}>
          <Stack spacing={{ base: '12', md: '16' }}>
            <Flex>
              <BlogPost post={posts[0]} isHero />
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: '12', lg: '8' }}>
              {posts.slice(1, 4).map((post) => (
                <BlogPost key={post.id} post={post} />
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
